"use client";
import React from "react";
import {useAuthContext} from "@/context/AuthContext";
import logOut from "@/firebase/auth/logout";
import {useRouter} from "next/navigation";
function Page() {
  const {user} = useAuthContext();
  const router = useRouter();

  const handleLogout = async (event) => {
    event.preventDefault();

    const {result, error} = await logOut();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <div>
      <h1>Only logged in users can view this page</h1>
      <button onClick={handleLogout}>Sign out</button>
    </div>
  );
}

export default Page;
