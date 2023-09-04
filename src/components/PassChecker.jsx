import { useState, useEffect } from "react";
import zxcvbn from "zxcvbn";
import { RedAlert, GreenAlert, YellowAlert } from "./alerts";

const passwordStrength = [
  {
    score: 0,
    text: "Very weak",
    color: "text-red-500",
  },
  {
    score: 1,
    text: "Weak",
    color: "text-red-500",
  },
  {
    score: 2,
    text: "Fair",
    color: "text-yellow-500",
  },
  {
    score: 3,
    text: "Good",
    color: "text-green-500",
  },
  {
    score: 4,
    text: "Strong",
    color: "text-green-500",
  },
];

export const PassChecker = () => {
  const [password, setPassword] = useState("");
  const [passwordResults, setPasswordResults] = useState({});

  useEffect(() => {
    if (password) {
      const results = zxcvbn(password);
      console.log(results);
      setPasswordResults(results);
    }
  }, [password]);
  return (
    <div className="mt-5">
      <h2 className="mx-auto max-w-2xl text-center text-sm font-bold tracking-tight text-white sm:text-3xl">
        Password Tester
      </h2>
      <div className="mx-auto mt-3 flex max-w-md gap-x-4">
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your password"
        />
      </div>
      {password && (
        <p className="text-center mt-2 font-bold text-lg leading-8 text-gray-300">
          Your password secure score is{" "}
          <span
            className={`${
              passwordStrength[passwordResults.score]?.color || ""
            }`}
          >
            {passwordResults.score + 1 || 0} / 5
          </span>
          !
        </p>
      )}
      <div className="mt-2 mx-auto max-w-md">
        {password &&
          (passwordResults.score === 0 || passwordResults.score === 1) && (
            <RedAlert passwordResults={passwordResults} />
          )}

        {password && passwordResults.score === 2 && (
          <YellowAlert passwordResults={passwordResults} />
        )}

        {password &&
          (passwordResults.score === 3 || passwordResults.score === 4) && (
            <GreenAlert passwordResults={passwordResults} />
          )}
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
