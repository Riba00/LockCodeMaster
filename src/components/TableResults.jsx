
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
      

    </>
  );
};
