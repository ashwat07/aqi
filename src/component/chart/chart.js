import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import PropTypes from "prop-types";

function AQILineChart(props) {
  const { cityName, data } = props;
  return (
    <div className="center">
      <h1>{cityName}</h1>
      <LineChart width={1200} height={500} data={data}>
        <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

AQILineChart.propTypes = {
  cityName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default AQILineChart;
