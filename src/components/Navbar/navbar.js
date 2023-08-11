"use client";
import { FaBrain } from "react-icons/fa";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const session = useSession().data;
  const isHomePage = router.pathname === "/";
  const isAssessmentPage = router.pathname === "/assessment";
  
  const handleLogout = () => {
    signOut();
    router.push("/");
  };
  const handleHomeClick = () => {
    router.push("/");
  };
  const handleAssessmentClick = () => {
    router.push("/assessment");
  };
  return (
    <section className=" fixed left-0 right-0 top-0 z-10 bg-white shadow-md">
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 mx-8 my-4 flex text-lg">
          <FaBrain className="mx-3" size={25} />
          ADSLC
        </div>
        <div className="col-span-1 my-4 grid grid-cols-5 ">
          <div className="col-span-2">
            <h5 className="text-md  text-right">
              Welcome Dear{" "}
              <span className="font-bold">{session.user.name}</span>!
            </h5>
          </div>
          <div className="col-span-1">
            <h5
              onClick={handleHomeClick}
              className={`text-md mx-3 cursor-pointer text-center ${
                isHomePage
                  ? "underline decoration-[#172e5a]  decoration-2 underline-offset-8"
                  : ""
              }`}
            >
              Home
            </h5>
          </div>
          <div className="col-span-1">
            <h5
              onClick={handleAssessmentClick}
              className={`text-md mx-3 cursor-pointer text-left${
                isAssessmentPage
                  ? "underline decoration-[#172e5a]  decoration-2 underline-offset-8"
                  : ""
              }`}
            >
              Assessment
            </h5>
          </div>
          <span
            className="mr-4 cursor-pointer  border-none text-black hover:text-gray-900 md:mr-4"
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
            }}
          >
            logout
          </span>
        </div>
      </div>
    </section>
  );
}
