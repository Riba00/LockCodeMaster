import { useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
import { TableResults } from "./components/TableResults";
import { RedAlert } from "./components/alerts/RedAlert";
import { YellowAlert } from "./components/alerts/YellowAlert";
import { GreenAlert } from "./components/alerts/GreenAlert";

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
      setPasswordResults(results);
    }
  }, [password]);

  return (
    <div className="flex justify-center py-4 min-h-screen bg-gray-900">
      <div className="flex flex-col items-center overflow-hidden m-2 px-6 py-3 sm:px-6">
        <h2 className="text-center text-3xl mb-2 font-bold tracking-tight text-white sm:text-4xl">
          PassChecker
        </h2>
        <p className="text-center text-lg leading-8 text-gray-300">
          How secure is your password?
        </p>
        <input
          id="passChecker"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-96 md:w-96 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white mt-4"
          placeholder="Enter a password"
        />
        
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
        <div className="mt-2">
          {password && (passwordResults.score === 0 || passwordResults.score === 1) && (
            <RedAlert passwordResults={passwordResults} />
          )}

          {password && passwordResults.score === 2 && (
              <YellowAlert passwordResults={passwordResults} />
            )}

          {password &&
            (passwordResults.score === 3 || passwordResults.score === 4) && (
              <GreenAlert passwordResults={passwordResults} />
            )}
        </div>

        <TableResults passwordData={passwordResults} />
      </div>
    </div>
  );
};
