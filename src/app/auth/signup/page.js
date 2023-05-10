"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import {useRouter} from "next/navigation";
import Link from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const {result, error} = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mx-auto max-w-md rounded ">
        <h1 className="mb-2 text-2xl font-bold">Sign up to MyApp</h1>
        <p className="mb-4 text-sm text-gray-700">
          Already a member?{" "}
          <Link className="text-blue-600 " href="/auth/signin">
            Log in
          </Link>
        </p>
        <form onSubmit={handleForm}>
          <label htmlFor="email">
            <p className="mb-2 block  ">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className=" mb-4 w-full appearance-none rounded border px-4 py-4 leading-tight text-gray-700  focus:outline-none"
            />
          </label>
          <label htmlFor="password">
            <p className="mb-2 block">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className=" mb-6 w-full appearance-none rounded border px-4 py-4 leading-tight text-gray-700 focus:outline-none"
            />
          </label>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-6 py-3  text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
