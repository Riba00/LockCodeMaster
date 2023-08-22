import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const GreenAlert = ({ passwordResults }) => {
  const { score } = passwordResults;
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400 mt-0.5"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="font-bold text-green-500">
            Your password is{" "}
            <b>
              {score === 3 && "STRONG!!!"}
              {score === 4 && "VERY STRONG!!!"}
            </b>
          </h3>
          <div className="text-sm text-green-700">
            <p>
              {score === 3 &&
                "Your password is strong enough to protect you from online threats."}
              {score === 4 &&
                "Your password is very strong and you can feel safe."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
