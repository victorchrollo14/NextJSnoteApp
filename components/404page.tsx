const NotFound = ({ message }: any) => {
  return (
    <>
      <h1>404 Page not Found</h1>
      {message && <h1>{message}</h1>}
    </>
  );
};
