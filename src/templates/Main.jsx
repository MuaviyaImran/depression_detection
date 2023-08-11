import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
// import Navbar from "../components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "../components/Navbar/navbar";
export function Main(props) {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  if (session.status === "loading") {
    return <h1 className="text-center text-2xl">Loading...</h1>;
  }

  return (
    <>
      <div className={inter.className}>
        <Navbar />
      </div>
      <div className="flex min-h-screen flex-col">
        {props.meta}

        <div className="flex flex-1">
          <main className="content flex-1 ">{props.children}</main>
        </div>
      </div>
    </>
  );
}
