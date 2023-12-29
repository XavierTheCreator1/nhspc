import React from "react";
import Navbar from "@/app/components/Navbar";
import FormText from "../components/login/FormText";
import StudentNumber from "@/app/components/login/StudentNumber";
import RememberMe from "@/app/components/login/RememberMe";
import Password from "@/app/components/login/Password";
import Link from "next/link";

import styles from "./styles.module.css";
import { symlink } from "fs";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className={styles.shiftedMain}>
        <form
          target="/login"
          method="post"
          autoComplete="on"
          className="flex h-full min-h-fit rounded-2xl flex-col form-control bg-base-300 w-full items-center justify-center sm:max-w-xs sm:h-4/5"
        >
          <h1 className="text-4xl text-primary text-center">
            Sign into the NHSPC
          </h1>
          <div className="mb-4"></div>
          <FormText label="Student Number">
            <StudentNumber />
          </FormText>
          <div className="mb-2"></div>
          <FormText label="Password">
            <Password />
          </FormText>
          <div className="mb-2"></div>
          <label className="cursor-pointer label w-2/5 sm:w-1/2">
            <span className="label-text">Remember Me</span>
            <RememberMe />
          </label>
          <div className="mb-4"></div>
          <button className="btn btn-primary btn-wide">Sign In</button>
          <div className="w-5/6">
            <div className="divider divider-neutral">OR</div>
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/join" className="link link-primary">
              Sign Up
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
