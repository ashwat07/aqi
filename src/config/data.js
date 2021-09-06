import moment from "moment";

class Data {
  constructor() {
    this.data = {};
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

  getData() {
    return this.data;
  }

  getCityData(city) {
    return this.data[city];
  }
}

export default Data;
