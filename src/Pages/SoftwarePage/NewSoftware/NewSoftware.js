import { useState } from "react";
import AddPurchasedTo from "./AddPurchasedTo";
import AddSoftwareActions from "./AddSoftwareActions";
import AddSoftwareHeader from "./AddSoftwareHeader";
import AddSoftwareKey from "./AddSoftwareKey";
import AddSoftwareLicenseType from "./AddSoftwareLicenseType";
import AddSoftwareMaintenance from "./AddSoftwareMaintenance";
import AddSoftwareName from "./AddSoftwareName";
import AddSoftwarePrice from "./AddSoftwarePrice";
import AddSoftwareRenew from "./AddSoftwareRenew";
import AddSoftwareWebsite from "./AddSoftwareWebsite";

const NewSoftware = (props) => {
  const [licenseType, setLicenseType] = useState("lifeTimeLicense");

  return (
    <div className="col-10 col-xl-8 col-xxl-6 m-auto p-2 mb-2 bg-secondary rounded">
      <AddSoftwareHeader />

      <div className="p-2 bg-white rounded">
        <form className="row g-3">
          <AddSoftwareName />
          <AddSoftwareWebsite />
          <AddSoftwarePrice />
          <AddPurchasedTo />
          <AddSoftwareKey />
          <AddSoftwareLicenseType
            licenseType={licenseType}
            setLicenseType={setLicenseType}
          />
          <AddSoftwareRenew licenseType={licenseType} />
          <AddSoftwareMaintenance />
          <AddSoftwareActions />
        </form>
      </div>
    </div>
  );
};

export default NewSoftware;
