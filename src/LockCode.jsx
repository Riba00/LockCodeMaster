import { PassChecker } from "./components/PassChecker";
import { PassGenerator } from "./components/PassGenerator";

export const LockCode = () => {
  return (
    <div className="min-h-screen relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl">
      <h1 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        LockCode Master
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-300">
        Welcome to <b>LockCode Master</b>, where we transform ordinary passwords
        into extraordinary safeguards for your online world. <br />We offer two
        services: <b>Password Generator</b> and <b>Password Tester</b>.{" "}
      </p>

      <PassGenerator />

      <hr className="w-1/3 h-1 mx-auto my-7 bg-white border-2 rounded dark:bg-gray-700"/>

      <PassChecker />
    </div>
  );
};
