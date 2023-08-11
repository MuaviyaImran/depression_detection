import { validateRegister } from "@lib/validate";
import styles from "@styles/Form.module.css";
import { useFormik } from "formik";
import _ from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import showToast from "../lib/toast";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      agree: false,
      phone: "",
    },
    validate: validateRegister,
    onSubmit,
  });

  async function onSubmit(values) {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/signup`, {
        method: "POST",
        body: JSON.stringify({
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          password: values.password,
          phone: values.phone,
          courses: [],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        setSuccess(true);
        router.push("/");
      } else if (res.status === 406) {
        setError("User already exists with this email");
      } else {
        setError("Something went wrong");
      }
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      {/* <Main> */}
      <ToastContainer />
      <section className="flex min-h-screen items-end justify-end bg-[url('/assets/signup.png')] bg-cover bg-no-repeat">
        <div className="w-2/4 backdrop-blur-md pb-auto ">
          <div className="title">
            <h1 className="text-center text-4xl font-bold text-gray-800">
              Sign Up
            </h1>
          </div>
          <form
            className="m-auto flex flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                className={styles.input_text}
                type="text"
                id="firstname"
                placeholder="First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <span className="text-sm text-rose-500">
                  {formik.errors.firstName}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                className={styles.input_text}
                type="text"
                id="lastname"
                placeholder="Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <span className="text-sm text-rose-500">
                  {formik.errors.lastName}
                </span>
              )}
            </div>

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
              {formik.errors.email && formik.touched.email && (
                <span className="text-sm text-rose-500">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="number">Contact</label>
              <input
                className={styles.input_text}
                type="phone"
                maxlength={11}
                id="number"
                placeholder="Number"
                autoComplete="off"
                {...formik.getFieldProps("phone")}
              />
              {formik.errors.phone && formik.touched.phone && (
                <span className="text-sm text-rose-500">
                  {formik.errors.phone}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className={styles.input_text}
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password && (
                <span className="text-sm text-rose-500">
                  {formik.errors.password}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                className={styles.input_text}
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                {...formik.getFieldProps("cpassword")}
              />
              {formik.errors.cpassword && formik.touched.cpassword && (
                <span className="text-sm text-rose-500">
                  {formik.errors.cpassword}
                </span>
              )}
            </div>

            <div>
              <div className="flex">
                <input
                  className="hover:cursor-pointer"
                  type="checkbox"
                  id="checkbox"
                  {...formik.getFieldProps("agree")}
                />
                <label htmlFor="checkbox" className="ms-2">
                  I agree to the{" "}
                  <Link
                    href={"/terms"}
                    className="terms"
                    passHref
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {formik.errors.agree && (
                <div className="text-sm text-rose-500">
                  {formik.errors.agree}
                </div>
              )}
            </div>

            <div className="mt-2 flex flex-col gap-2">
              {error && (
                <span className="text-center text-sm text-rose-500">
                  {error}
                </span>
              )}
              {success && (
                <span className="text-center text-sm text-green-600">
                  User registered successfully
                </span>
              )}
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 py-2 text-slate-50 disabled:opacity-50"
                disabled={loading || !_.isEmpty(formik.errors)}
              >
                Sign up
              </button>
            </div>
            <div className="text-center">
              Already have account? {""}
              <Link href="/signin">Sign in</Link>
            </div>
          </form>
        </div>
      </section>
      {/* </Main> */}
    </>
  );
}
