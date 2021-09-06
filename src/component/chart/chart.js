import React from "react";
import { Chart } from "react-google-charts";

function GeoChart() {
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="GeoChart"
        data={[
          ["City", "Air Quality Index"],
          ["Mumbai", 128.8, 1285.31],
          ["Bangalore", 192.2, 181.76],
          ["Pune", 100, 117.27],
        ]}
        options={{
          region: "IN",
          displayMode: "",
          colorAxis: { colors: ["green", "blue"] },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyBxamFsA_NuxFZS3Y3cBIGwM5v2IUizPrY"
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default GeoChart;
