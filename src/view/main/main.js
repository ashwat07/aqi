import React, { useEffect, useState } from "react";
import { Spin } from "antd";

import AQICard from "../../component/card/card";
import getWsUrl from "../../config/socket";
import Data from "../../config/data";
import useForceUpdate from "../../hooks/useForceRender";
import "./main.css";
// import Chart from "../../component/chart/chart";
import AqiTable from "./aqitable";
import "antd/lib/spin/style/index.css";

const data = new Data();

function Main() {
  const [isConnected, setIsConnected] = useState(false);
  const [tableData, setTableData] = useState([]);
  const forceUpdate = useForceUpdate();

  const message = (messages) => {
    messages.forEach((message) => {
      data.pushItem(message);
      forceUpdate();
    });
  };

  useEffect(() => {
    const ws = new WebSocket(getWsUrl());

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
    setTableData([...tableData, item]);
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
    </div>
  );
}

export default Main;
