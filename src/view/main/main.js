import React, { useEffect, useState } from "react";
import { Spin } from "antd";

import AQICard from "../../component/card/card";
import Data from "../../config/data";
import useForceUpdate from "../../hooks/useForceRender";
import AqiTable from "../../component/aqitable/aqitable";
import LineChart from "../../component/chart/chart";
import constants from "../../config/constants";

const data = new Data();

function Main() {
  const [isConnected, setIsConnected] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [cityName, setCityName] = useState("");
  const forceUpdate = useForceUpdate();

  const message = (messages) => {
    messages.forEach((message) => {
      data.pushItem(message);
      data.pushCityData(message);
      forceUpdate();
    });
  };

  useEffect(() => {
    const ws = new WebSocket(constants.WS_URL);

    ws.onopen = () => {
      setIsConnected(true);
    };

    ws.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      message(msg);
    };

    return () => {
      ws.onclose = () => {
        setIsConnected(false);
      };
    };
  }, []);

  const handleCardClick = (item) => {
    const isCityExist = tableData.some((data) => data.city === item.city);
    if (!isCityExist) setTableData([...tableData, item]);
    setCityName(item.city);
  };

  if (!isConnected) {
    return (
      <div className="main">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="card-wrapper">
        {Object.values(data.getData()).map((item) => {
          return (
            <span key={item.city} onClick={() => handleCardClick(item)}>
              <AQICard {...item} />
            </span>
          );
        })}
      </div>
      <AqiTable tableData={tableData} />
      <LineChart data={data.getCityData(cityName)} cityName={cityName} />
    </div>
  );
}

export default Main;
