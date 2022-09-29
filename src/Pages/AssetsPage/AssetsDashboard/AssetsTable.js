import { useSelector } from "react-redux";
import Table from "../../../Components/UI/Table/Table";

const AssetsTable = (props) => {
  const softwareSlice = useSelector((state) => state.software);

  const dataArray = [{}];
  const columns = [
    { id: 1, title: "name", class: "" },
    { id: 2, title: "nextRenewal", class: "" },
    { id: 3, title: "purchasedTo", class: "" },
    { id: 3, title: "price", class: "" },
  ];
  const dataTitle = "Software Assets";

  return (
    <Table dataArray={softwareSlice} columns={columns} dataTitle={dataTitle} />
  );
};

export default AssetsTable;
