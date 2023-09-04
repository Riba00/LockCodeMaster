import { PassChecker } from "./components/PassChecker";
import { PassGenerator } from "./components/PassGenerator";

export const LockCode = () => {


  return (
    <div className="min-h-screen relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        LockCode Master
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
        Empower Your Online Life with Unbreakable Codes
      </p>

      <PassGenerator />
      
      <PassChecker />
    </div>
  );
};
