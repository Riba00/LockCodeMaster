
export const TableResults = ({ passwordData = {} }) => {
  const { password } = passwordData;

  const resultRows = [
    {
      text: "Characters",
      value: password?.length,
    },
    {
      text: "Uppercase",
      value: password?.match(/[A-Z]/g)?.length,
    },
    {
      text: "Lowercase",
      value: password?.match(/[a-z]/g)?.length,
    },
    {
      text: "Numbers",
      value: password?.match(/[0-9]/g)?.length,
    },
    {
      text: "Symbols",
      value: password?.match(/[^a-zA-Z0-9]/g)?.length,
    },
  ];

  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gray-900 py-3">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                      <tbody className="divide-y divide-gray-50">
                        {resultRows.map((row) => (
                        <tr key={row.text}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {row.text}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {row.value}
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
