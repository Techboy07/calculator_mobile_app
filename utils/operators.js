export function plus(str) {
  let arr = str.split("+");
  return arr.reduce((x, y) => parseFloat(x) + parseFloat(y));
}

// subtraction function
export function minus(str) {
  let arr = str.split("-");
  return arr.reduce((x, y) => parseFloat(x) - parseFloat(y));
}
// multiplication function
export function times(str) {
  let arr = str.split("*");
  return arr.reduce((x, y) => parseFloat(x) * parseFloat(y));
}
// division function
export function dividedBy(str) {
  let arr = str.split("/");
  return arr.reduce((x, y) => parseFloat(x) / parseFloat(y));
}
