import { FaMicrophone, FaAngleDown } from "react-icons/fa";
import { react, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
export default function StartS() {
  const session = useSession().data;
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [recordedAudioURL, setRecordedAudioURL] = useState(null);

  useEffect(() => {
    if (prediction) {
      Swal.fire(session?.user?.name, prediction).then(() => {
        router.push("/");
      });
    }
  }, [prediction]);

  const handleRecordAudio = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        const chunks = [];
        recorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/wav" });
          setAudioChunks(chunks);
          const url = URL.createObjectURL(blob);
          setRecordedAudioURL(url);
        };

        recorder.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing audio:", error);
      });
  };

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      // loop over files and add to formData
      formData.append("audio", selectedFile);

      const data = await fetch("http://127.0.0.1:3000/analyze_audio", {
        method: "POST",
        body: formData,
      });
      let response = await data.json();
      setPrediction(response.predicted_severity_level);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };
  return (
    <section className="h-full bg-[#eee] ">
      <h1 className="py-6 text-center text-[35px] font-extrabold text-black">
        START YOUR ASSESSMENT
      </h1>
      <p className="px-10 text-center text-[14px] font-normal text-gray-600">
        Click on the microphone button to activate the voice recording feature.
        Make sure to grant the necessary microphone access when prompted.
      </p>

      <p className="mx-5 my-6  px-10 text-center text-[14px] font-bold text-gray-600">
        1- Take a deep breath and start speaking naturally(free speech),where
        describes how you feel emotionally,physically and your ability to
        Function.
      </p>

      <p className="mx-5 my-6 px-10 text-center text-[14px] font-bold text-gray-600">
        2- Voice Recording must lies betwween 10secs-20secs,the recording which
        will be less than 10s were discarded.
      </p>

      <h2 className="py-6 text-center text-[24px] font-bold text-black">
        Recorder?
      </h2>
      <p className="px-10 text-center text-[14px] font-normal text-gray-600">
        Select what you want to record:
      </p>

      <div className="my-3 grid justify-center">
        <div>
          {/* Dropdown items */}
          <button
            onClick={handleRecordAudio}
            className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
          >
            Record Audio
          </button>
          <button onClick={isRecording ? stopRecording : handleRecordAudio}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
        {recordedAudioURL && (
          <div>
            <audio controls src={recordedAudioURL}></audio>
            <a href={recordedAudioURL} download="Recorded-Audio.wav">
              Download Recorded Audio
            </a>
          </div>
        )}
        <div className="m-4 grid justify-center">
          <label
            htmlFor="fileInput"
            className="block w-full cursor-pointer border border-black bg-gray-400 p-2 text-left text-black hover:bg-gray-100"
          >
            Choose a File
            <input
              type="file"
              id="fileInput"
              accept=".mp3,.wav,.ogg,.aac"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
