import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

import range from "../../config/range";

const columns = [
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "AQI",
    dataIndex: "aqi",
    key: "AQI",
    sorter: (a, b) => a.aqi - b.aqi,
    render(aqi) {
      return {
        props: {
          className: range(aqi),
        },
        children: <div>{aqi}</div>,
      };
    },
  },
];

export default function AqiTable(props) {
  const { tableData } = props;

  const modifiedData = tableData.map((data, index) => ({
    key: index,
    city: data.city,
    aqi: Number(data.aqi).toFixed(2),
  }));

  return (
    <div className="aqitable">
      <h1>Comparison</h1>
      <Table dataSource={modifiedData} columns={columns} />
    </div>
  );
}

AqiTable.propTypes = {
  tableData: PropTypes.array.isRequired,
};
