"use client";
import React from "react";

const ChangingTip = () => {
  const tips = [
    "Did you misspell the url?",
    "Did you get lost?",
    "Need some help?",
  ];
  return (
    <p className="mb-20 text-2xl">
      {tips[Math.floor(Math.random() * tips.length)]}
    </p>
  );
};

export default ChangingTip;
