const range = (num) => {
  num = +num;
  if (num > 400 && num <= 500) {
    return "card__severe";
  } else if (num > 300 && num <= 400) {
    return "card__vpoor";
  } else if (num > 200 && num <= 300) {
    return "card__poor";
  } else if (num > 100 && num <= 200) {
    return "card__moderate";
  } else if (num > 50 && num <= 100) {
    return "card__satisfactory";
  } else if (num <= 50) {
    return "card__good";
  }
  return "";
};

export default range;
