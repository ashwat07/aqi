import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";
import range from "../../config/range";
import "./card.css";

function AQICard(props) {
  const { city, aqi, updatedAt } = props;

  const classes = ["card"];
  classes.push(range(aqi));

  return (
    <Card className={classes.join(" ")}>
      <div className="card__title">
        <i className="fas fa-map-marker-alt"></i>
        <p>{city}</p>
      </div>
      <div className="card__aqi">
        <p>{Number(aqi).toFixed(2)}</p>
      </div>
      <div className="card__time">
        <p>Updated:</p>
        <p>{updatedAt}</p>
      </div>
    </Card>
  );
}

AQICard.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default AQICard;
