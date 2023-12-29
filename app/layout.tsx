"use client";

import React from "react";
import "@/app/components/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = React.useRef("night");
  React.useEffect(() => {
    const userTheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    theme.current = userTheme ? "night" : "fantasy";
    console.log(userTheme);
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
