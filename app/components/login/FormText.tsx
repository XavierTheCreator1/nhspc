import React from "react";

const FormText = (children) => {
  return (
    <label className="form-control w-5/6 max-w-xs">
      <div className="label">
        <span className="label-text">Student Number</span>
      </div>
      <StudentNumber />
    </label>
  );
};

export default FormText;
