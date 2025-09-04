import React from "react";
import P from "../design/PrimaryButton";
import SecondaryButton from "../design/SecondaryButton";
import DestructiveButton from "../design/DestructiveButton";
import GhostButton from "../design/GhostButton";
import LinkButton from "../design/LinkButton"


const Button = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Button</h1>
      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Default
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <P />
        </div>
      </div>

      <div className="mt-15"> 
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Secondary
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SecondaryButton />
        </div>
      </div>

      <div className="mt-15"> 
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Destructive
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <DestructiveButton />
        </div>
      </div>

      <div className="mt-15"> 
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Ghost
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <GhostButton />
        </div>
      </div>

      <div className="mt-15"> 
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Link
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <LinkButton />
        </div>
      </div>

      <div className="ml-80 mt-25">
        <h1 className="font-mono">Built by STARK UI at Vercel. The source code is available on GitHub.</h1>
      </div>
    </div>
  );
};

export default Button;
