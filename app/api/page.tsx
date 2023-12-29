import React from "react";
import Link from "next/link";
import TalkToDiscord from "../components/api/TalkToDiscord";

const APIPage = () => {
  return (
    <>
      <TalkToDiscord />
      <h1 className="flex h-screen w-full items-center justify-center text-center text-8xl">
        Welcome to the API!
      </h1>
      <Link
        href="/"
        className="link-hover link flex h-screen w-full items-center justify-center text-center text-2xl"
      >
        Back home
      </Link>
    </>
  );
};

export default APIPage;
