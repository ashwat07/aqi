import React from "react";

import { Table, Tag, Space } from "antd";
import "antd/lib/table/style/index.css";
import "antd/lib/tag/style/index.css";
import "antd/lib/space/style/index.css";

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
  },
  //   {
  //     title: "Tags",
  //     key: "tags",
  //     dataIndex: "tags",
  //     render: (tags) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? "geekblue" : "green";
  //           if (tag === "loser") {
  //             color = "volcano";
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
];

const data = [
  {
    key: "1",
    city: "Mumbai",
    aqi: 32,
    // tags: ["nice", "developer"],
  },
  {
    key: "2",
    city: "Mumbai",
    aqi: 88,
    // tags: ["nice", "developer"],
  },
  {
    key: "3",
    city: "Mumbai",
    aqi: 70,
    // tags: ["nice", "developer"],
  },
];

export default function AqiTable(props) {
  const { tableData } = props;

  const modifiedData = tableData.map((data, index) => ({
    key: index,
    city: data.city,
    aqi: data.aqi,
  }));

  console.log(tableData);
  return (
    <div>
      <p>Comparison</p>
      <Table dataSource={modifiedData} columns={columns} />
    </div>
  );
}
