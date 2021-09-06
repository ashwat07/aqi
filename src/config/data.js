import moment from "moment";

class Data {
  constructor() {
    this.data = {};
    this.singleCityData = {};
  }

  pushItem(item) {
    const ifCityExist = this.data[item.city];
    if (ifCityExist) {
      this.update(item);
    } else {
      this.data[item.city] = { ...item, updatedAt: moment().fromNow() };
    }
  }

  update(item) {
    this.data[item.city].aqi = item.aqi;
    this.data[item.city].updatedAt = moment().fromNow();
  }

  pushCityData(item) {
    if (!this.singleCityData[item.city]) {
      this.singleCityData[item.city] = [{ aqi: item.aqi }];
    } else {
      this.singleCityData[item.city].push({ aqi: item.aqi });
    }
  }

  getData() {
    return this.data;
  }

  getCityData(city) {
    return this.singleCityData[city];
  }
}

export default Data;
