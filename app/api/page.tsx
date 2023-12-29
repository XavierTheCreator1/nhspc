import React from "react";
import Link from "next/link";
import TalkToDiscord from "@/app/components/api/TalkToDiscord";
import InfoPage from "@/app/components/InfoPage";

const APIPage = () => {
  return (
    <>
      <InfoPage>
        <main className="flex flex-col h-screen w-full items-center justify-center text-center">
          <h1 className="text-4xl mb-4">Welcome to the NHSPC API!</h1>
        </main>
      </InfoPage>
    </>
  );
};

export default APIPage;
