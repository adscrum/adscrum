import Image from "next/image";

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
          This is our app please sign up or sign in to continue.
        </p>
      </div>
    </div>
  );
}
