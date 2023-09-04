import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { getGeneratedPassword } from "../helpers";

export const PassGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    setGeneratedPassword(getGeneratedPassword());
    console.log(getGeneratedPassword());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    alert("Copied to clipboard");
  };

  return (
    <div className="mx-auto my-5 flex flex-col justify-center max-w-md gap-y-2">
      <h2 className="mx-auto max-w-2xl text-center text-sm font-bold tracking-tight text-white sm:text-3xl">
        Password Generator
      </h2>
      <input
        id="generatedPassword"
        type="text"
        value={generatedPassword}
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 text-center"
        placeholder=""
        disabled
      />
      <div className="flex flex-row justify-center mt-1 gap-x-2">
        <button
          type="button"
          className="w-11/12 mx-auto rounded-md bg-purple-700 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        <button
          type="button"
          className="w-1/12 flex items-center justify-center mx-auto rounded-md bg-purple-700 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={copyToClipboard}
        >
          <ClipboardDocumentIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
