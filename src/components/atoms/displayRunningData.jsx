const displayRunningData = (data, string) => {
  return (
    <>
      {typeof data === "number" ? `${(data / 1000).toFixed(2)} ${string}` : ""}
    </>
  );
};

export default displayRunningData;
