const DetailsActions = (props) => {
  return (
    <div className="p-2 mb-2 bg-white text-center rounded">
      <h4 className="fw-bold">Actions</h4>
      <button className="btn btn-success">Renew this license</button>
      <button className="btn btn-success">Change License Key</button>
    </div>
  );
};

export default DetailsActions;
