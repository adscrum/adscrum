import Link from "next/link";

export const metadata = {
  title: "Site Page",
  description: "This is the site page",
};

export default function Home() {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="mb-2 text-3xl font-bold ">Home</h1>
        <p className="text-slate-700">
          This is our app please{" "}
          <Link href="/auth/signup" className=" text-blue-600 ">
            sign up
          </Link>{" "}
          or{" "}
          <Link href="/auth/signin" className=" text-blue-600 ">
            sign in
          </Link>{" "}
          to continue.
        </p>
      </div>
    </div>
  );
}
