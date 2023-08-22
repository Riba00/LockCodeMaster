import { XCircleIcon } from "@heroicons/react/20/solid";

export const RedAlert = ({ passwordResults }) => {
  const { feedback, score } = passwordResults;
  const { warning, suggestions } = feedback;

  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon
            className="h-5 w-5 text-red-400 mt-0.5"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="font-bold text-red-500">
            Your password is{" "}
            <b>
              {score === 0 && "VERY WEAK!!!"}
              {score === 1 && "WEAK!!!"}
            </b>
          </h3>
          {warning && <p className="text-sm text-red-700">{warning}.</p>}
          <h4 className="text-sm font-medium text-red-800 mt-1">
            <b>TRY TO:</b>
          </h4>
          <div className=" text-sm text-red-700">
            <ul role="list" className="list-disc space-y-0.5 pl-4">
              {suggestions &&
                suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
