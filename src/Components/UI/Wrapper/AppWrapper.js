const AppWrapper = (props) => {
  return (
    <main className="container-fluid vh-100 vw-100">
      <div className="row h-100">{props.children}</div>
    </main>
  );
};

export default AppWrapper;
