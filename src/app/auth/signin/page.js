"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import {useRouter} from "next/navigation";

// adding meta data doesnt work with use client
// potential fix https://www.reddit.com/r/nextjs/comments/11fjnpq/new_metadata_support_and_use_client/

// export const metadata = {
//   title: "Site Page",
//   description: "This is the site page",
// };

function Page() {
  const [email, setEmail] = React.useState(""); //do we need to say React here, check usestate docs
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const {result, error} = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  //https://v1.tailwindcss.com/components/forms
  return (
    <div className="container mx-auto px-4 py-8">
      <form
        onSubmit={handleForm}
        className="mx-auto max-w-md rounded bg-slate-100 p-8"
      >
        <label htmlFor="email">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Page;
