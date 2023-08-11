import { useEffect } from "react";
import { useState } from "react";
import "animate.css/animate.min.css";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { useRouter } from "next/router";
import showToast from "../lib/toast";
import Head from "next/head";
import Description from "../components/Description/description";
import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import Process from "../components/Process/process";
import Start from "../components/Start/start";

const HomePage = () => {
  const session = useSession().data;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // getbooksCount();
    setLoading(false);
  }, [session]);

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Description />
      <Process />
      <Start />
      <Footer />
    </main>
  );
};

export default HomePage;
