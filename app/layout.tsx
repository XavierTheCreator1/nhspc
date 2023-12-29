import React from "react";
import "@/app/components/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="night">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
