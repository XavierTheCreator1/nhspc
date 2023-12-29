import React from "react";
import StudentNumber from "@/app/components/login/StudentNumber";
import RememberMe from "@/app/components/login/RememberMe";
import Password from "@/app/components/login/Password";

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <form className="flex h-3/5 items-center justify-center rounded-2xl bg-base-300 flex-col form-control w-full max-w-xs">
        <label className="form-control w-5/6 max-w-xs">
          <div className="label">
            <span className="label-text">Student Number</span>
          </div>
          <StudentNumber />
        </label>
        <div className="mb-2"></div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <Password />
        </label>
        <div className="mb-2"></div>
        <label className="cursor-pointer label w-1/2">
          <span className="label-text">Remember Me</span>
          <RememberMe />
        </label>
        <div className="mb-4"></div>
        <button className="btn btn-primary btn-wide" type="submit">
          Log In
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
