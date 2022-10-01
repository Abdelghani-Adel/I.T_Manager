import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { softwareActions } from "../../../Redux/slices/softwareSlices";
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
  const dispatch = useDispatch();
  const history = useHistory();

  const todary = new Date();
  const [softwareObject, setSoftwareObject] = useState({
    id: Math.random(),
    name: "",
    purchasedOn: todary.toLocaleDateString(),
    purcahsedTo: "",
    website: "",
    licenseTime: "",
    price: "",
    currency: "",
    renewPrice: "",
    maintenancePrice: "",
    licenseKey: "",
    expired: false,
  });

  const updateSoftwareObj = (update) => {
    setSoftwareObject((prev) => ({ ...prev, ...update }));
  };

  const [licenseType, setLicenseType] = useState("lifeTimeLicense");

  const newLicenseObject = {
    id: Math.random(),
    name: "test",
    purchasedOn: todary.toLocaleDateString(),
    purcahsedTo: "",
    website: "",
    licenseTime: licenseType,
    price: "",
    currency: "",
    renewPrice: "",
    maintenancePrice: "",
    licenseKey: "",
    expired: false,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(softwareActions.addSoftware(softwareObject));
    history.push("/software/dashboard");
  };

  return (
    <div className="col-10 col-xl-8 col-xxl-6 m-auto p-2 mb-2 bg-secondary rounded">
      <AddSoftwareHeader />

      <div className="p-2 bg-white rounded">
        <form className="row g-3" onSubmit={submitHandler}>
          <AddSoftwareName updateSoftwareObj={updateSoftwareObj} />
          <AddSoftwareWebsite updateSoftwareObj={updateSoftwareObj} />
          <AddSoftwarePrice updateSoftwareObj={updateSoftwareObj} />
          <AddPurchasedTo updateSoftwareObj={updateSoftwareObj} />
          <AddSoftwareKey updateSoftwareObj={updateSoftwareObj} />
          <AddSoftwareLicenseType updateSoftwareObj={updateSoftwareObj} />
          <AddSoftwareRenew
            softwareObject={softwareObject}
            updateSoftwareObj={updateSoftwareObj}
          />
          <AddSoftwareMaintenance updateSoftwareObj={updateSoftwareObj} />
          <AddSoftwareActions updateSoftwareObj={updateSoftwareObj} />
        </form>
      </div>
    </div>
  );
};

export default NewSoftware;
