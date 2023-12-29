import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const InfoPage = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default InfoPage;
