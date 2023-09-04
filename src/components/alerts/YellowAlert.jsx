import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export const YellowAlert = ({ passwordResults }) => {
  const { feedback } = passwordResults;
  const { warning, suggestions } = feedback;

  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400 mt-0.5"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="font-bold text-lg text-yellow-500">
            Your password is <b>FAIR!!!</b>
          </h3>
          {warning && <p className="text-yellow-700">{warning}.</p>}
          <h4 className="text-sm font-medium text-yellow-800 mt-1">
            <b>TRY TO:</b>
          </h4>
          <div className="text-sm text-yellow-700">
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
