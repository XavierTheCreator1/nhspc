import React from 'react';

const StudentNumber = () => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">What is your student number?</span>
      </div>
      <input
        type="number"
        placeholder="Ex. 1234567"
        className="input input-bordered w-full max-w-xs"
        pattern="[0-9]{7}"
        maxLength={7}
      />
    </label>
  );
};

export default StudentNumber;
