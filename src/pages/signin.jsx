import styles from "@styles/Form.module.css";
import { useFormik } from "formik";
import _ from "lodash";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import { validateLogin } from "@/lib/validate";

export default function Signin() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "t@t.com",
      password: "12345678",
    },
    validate: validateLogin,
    onSubmit,
  });

  async function onSubmit(values) {
    setError(false);
    setLoading(true);
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status.ok) router.push(router.query.callbackurl || status.url);
    else {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className="flex min-h-screen items-center justify-center bg-[url('/assets/login.jpg')] bg-cover bg-no-repeat">
        <div className="w-3/4 m-5  bg-[url('/assets/login.jpg')] bg-cover bg-no-repeat p-6">
          <FontAwesomeIcon
            className="mx-10"
            icon={faBrain}
            size="9x"
            color="#2a2a68"
          />
          <h2 class="mx-10 text-[120px] text-[#2a2a68]">
            <i>
              <b>ADSLC</b>
            </i>
          </h2>

          <p className="mx-10 text-[24px] text-[#2a2a68]">
            <i>
              <b>
                Welcome to our website, where we aim to lend a compassionate ear
                to your spoken words and help detect the whispers of depression,
                providing support and guidance on your path towards healing and
                hope.
              </b>
            </i>
          </p>
        </div>
        <div className="w-3/4">
          <div className="title">
            <h1 className="text-center text-4xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <h1 className="text-center text-4xl pb-5 font-bold text-gray-800">
              SignIn to Your Account
            </h1>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="m-auto flex flex-col gap-4"
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                className={styles.input_text}
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.errors.email && formik.touched.email && (
              <span className="text-rose-500">{formik.errors.email}</span>
            )}
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative flex items-center">
                <input
                  className={styles.input_text}
                  type={!show ? "password" : "text"}
                  id="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                <span
                  className="icon absolute right-0 px-4 hover:cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <HiOutlineEyeOff size={20} />
                  ) : (
                    <HiOutlineEye size={20} />
                  )}
                </span>
              </div>
            </div>
            {formik.errors.password && formik.touched.password && (
              <span className="text-rose-500">{formik.errors.password}</span>
            )}

            <div>
              <Link className="text-[black]" href="/forgot"><b>Forgot password?</b></Link>
            </div>
            
            <div className="mt-2 flex flex-col gap-2">
              {error && (
                <span className="text-center text-sm text-rose-500">
                  Something went wrong Email or password incorrect
                </span>
              )}
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 py-2 text-slate-50 disabled:opacity-50"
                disabled={loading || !_.isEmpty(formik.errors)}
              >
                Login
              </button>
            </div>
            <div >
              <Link className="text-[black]" href="/signup"><b>Dont have an Account? Signup</b></Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
