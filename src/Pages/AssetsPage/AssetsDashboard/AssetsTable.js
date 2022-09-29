import { useSelector } from "react-redux";
import Table from "../../../Components/UI/Table/Table";

const AssetsTable = (props) => {
  const dataArray = useSelector((state) => state.software);

  const columns = [
    { id: 1, title: "name", style: "" },
    { id: 2, title: "licenseKey", style: "" },
    { id: 3, title: "purchasedTo", style: "" },
    { id: 4, title: "price", style: "" },
    { id: 5, title: "currency", style: "" },
  ];
  const dataTitle = "Software Assets";

  const basePath = "/assets/software/details";

  return (
    <Table
      dataArray={dataArray}
      columns={columns}
      dataTitle={dataTitle}
      basePath={basePath}
    />
  );
};

export default AssetsTable;
