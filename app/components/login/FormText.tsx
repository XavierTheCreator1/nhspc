import React from "react";

const FormText = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactElement;
}) => {
  return (
    <label className="form-control w-5/6 max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
    </label>
  );
};

export default FormText;
