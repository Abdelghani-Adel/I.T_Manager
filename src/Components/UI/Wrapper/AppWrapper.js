const AppWrapper = (props) => {
  return (
    <main className="container-fluid">
      <div className="row">{props.children}</div>
    </main>
  );
};

export default AppWrapper;
