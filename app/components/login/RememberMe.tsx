"use client";

import React from "react";

const RememberMe = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => setChecked(!checked);

  return (
    <input
      type="checkbox"
      className="toggle toggle-primary"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default RememberMe;
