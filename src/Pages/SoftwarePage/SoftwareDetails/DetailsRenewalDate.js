import { useEffect, useState } from "react";

const DetailsRenewalDate = (props) => {
  const [renewalDate, setRenewalDate] = useState();

  useEffect(() => {
    let purchaseDate = new Date(props.software.purchasedOn);
    let renewalDate;
    if (props.software.annualFees) {
      purchaseDate.setFullYear(purchaseDate.getFullYear() + 1);
      renewalDate = purchaseDate.toLocaleDateString();
    } else if (props.software.monthlyFees) {
      purchaseDate.setMonth(purchaseDate.getMonth() + 1);
      renewalDate = purchaseDate.toLocaleDateString();
    } else {
      renewalDate = (
        <span className="text-success">
          This software has a life time license
        </span>
      );
    }
    setRenewalDate(renewalDate);
  }, []);
  return (
    <h4>
      Next Renewal Date :
      <span className="text-primary fw-bold"> {renewalDate}</span>
    </h4>
  );
};

export default DetailsRenewalDate;
