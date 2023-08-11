import { FaStar } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };
  const handleAssessmentClick = () => {
    router.push("/assessment");
  };
  return (
    <div>
      <section className="relative w-full">
        <div className="min-h-[200px] bg-[url('/assets/pic-5.png')] bg-cover bg-no-repeat p-5 text-white">
          <div className="mx-[10rem] grid grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <h2 className="mb-2 text-lg font-bold">QUICK LINKS</h2>
              <div className=" flex items-center">
                <FaStar className="mr-1 text-xl" color="green" />
                <p onClick={handleHomeClick} className="cursor-pointer text-sm">
                  Home
                </p>
              </div>
              <div className="flex items-center">
                <FaStar className="mr-1 text-xl" color="green" />
                <p
                  onClick={handleAssessmentClick}
                  className="cursor-pointer text-sm"
                >
                  Assessment
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-2 text-lg font-bold">Contact info</h2>
              <div className="mb-1 flex items-center">
                <GrMail className="mr-1 text-xl" color="green" />
                <p className="text-sm">emanshakeel4@gmai.com</p>
              </div>
              <div className="mb-1 flex items-center">
                <GrMail className="mr-1 text-xl" color="green" />
                <p className="text-sm">sri.amir5khattak10@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
