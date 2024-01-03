import matchExact from "./matchExact";
import store from "../myRedux/store";

const validateForDecimalPoint = (key) => {
  const input = store.getState().input.value;
  console.log(input);
  const regEx = new RegExp("\\d*(\\.?\\d*(\\+|\\-|\\*|\\/))*\\d*", "g");
  let y = matchExact(regEx, input);
  if (y == true) {
    return key;
  } else {
    return "";
  }
};

export default validateForDecimalPoint;
