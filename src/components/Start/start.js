import { useRouter } from "next/router";
export default function Start() {
  const router = useRouter();
  const handleAssessmentClick = () => {
    router.push("/assessment");
  };
  return (
    <section className="mx-12 my-5 bg-white">
      <h1 className="py-6 text-center text-[35px] font-extrabold text-black">
        START YOUR ASSESSMENT
      </h1>
      <p className="px-10 text-center text-[18px] font-normal">
        Click On The Microphone Button To Activate The Voice Recording Feature.
        Make Sure To Grant The Necessary Microphone Access When Prompted.
      </p>
      <div className="my-5 grid justify-center">
        <button
          onClick={handleAssessmentClick}
          className="bg-black p-4 text-white"
        >
          Click Here
        </button>
      </div>
    </section>
  );
}
