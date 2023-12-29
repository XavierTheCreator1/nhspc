import React from "react";
import Link from "next/link";
import TalkToDiscord from "../components/api/TalkToDiscord";

const APIPage = () => {
  return (
    <>
      <main className="flex flex-col h-screen w-full items-center justify-center text-center">
        <h1 className="text-4xl mb-4">Welcome to the NHSPC API!</h1>
        <Link href="/" className="text-xl link link-primary">
          Back home
        </Link>
      </main>
    </>
  );
};

export default APIPage;
