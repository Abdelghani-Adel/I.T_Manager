import { useSelector } from "react-redux";
import Table from "../../../Components/UI/Table/Table";

const AssetsTable = (props) => {
  const softwareSlice = useSelector((state) => state.software);

  const dataArray = [{}];
  const columns = [
    { id: 1, title: "name", style: "" },
    { id: 2, title: "nextRenewal", style: "" },
    { id: 3, title: "purchasedTo", style: "" },
    { id: 4, title: "price", style: "" },
  ];
  const dataTitle = "Software Assets";

  const basePath = "/assets";

  return (
    <Table
      dataArray={softwareSlice}
      columns={columns}
      dataTitle={dataTitle}
      basePath={basePath}
    />
  );
};

export default AssetsTable;
