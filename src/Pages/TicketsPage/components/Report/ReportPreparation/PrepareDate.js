import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PrepareDate = (props) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      className="border rounded mb-3 w-100 p-1"
      todayButton="Today"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      dateFormat="dd/MM/yyyy"
      onChange={(update) => setDateRange(update)}
      placeholderText="Select a date range"
      isClearable={false}
    />
  );
};

export default PrepareDate;
