import { Fragment } from "react";

const AddSoftwarePrice = (props) => {
  const onPriceBlur = (e) => {
    const priceObject = { price: e.target.value };
    props.updateSoftwareObj(priceObject);
  };

  const onCurrencyBlur = (e) => {
    const currencyObject = { currency: e.target.value };
    props.updateSoftwareObj(currencyObject);
  };
  return (
    <Fragment>
      <div className="col-md-3">
        <label className="form-label">Price</label>
        <input type="text" className="form-control" onBlur={onPriceBlur} />
      </div>

      <div className="col-md-3">
        <label className="form-label">Currency</label>
        <input type="text" className="form-control" onBlur={onCurrencyBlur} />
      </div>
    </Fragment>
  );
};

export default AddSoftwarePrice;
