import React from "react";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

export const Form = () => {
  return (
    <div className="flex gap-10 ">
      <SignUp />
      <SignIn />
    </div>
  );
};
