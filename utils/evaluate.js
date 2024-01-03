import { plus, minus, times, dividedBy } from "./operators.js";
import swap from "./swap.js";
import matchExact from "./matchExact.js";

//functions
export default function evaluate(str) {
  if (/\//.test(str) == true) {
    let dReg = new RegExp(
      "(\\+|\\-)?(\\d*(\\.\\d+)?)(\\/(\\+|\\-)?(\\d+(\\.\\d+)?))+",
      "g"
    );
    let f = str.match(dReg);
    if (f) {
      for (let i = 0; i < f.length; i++) {
        str = str.replace(f[i], dividedBy(f[i]));
      }
    }
  }
  if (/\*/.test(str) == true) {
    let tReg = new RegExp(
      "(\\+|\\-)?(\\d*(\\.\\d+)?)(\\*(\\+|\\-)?(\\d+(\\.\\d+)?))+",
      "g"
    );
    let g = str.match(tReg);
    if (g) {
      for (let i = 0; i < g.length; i++) {
        str = str.replace(g[i], times(g[i]));
      }
    }
  }

  if (/\+/.test(str) == true) {
    let pReg = new RegExp(
      "(\\+|\\-)?(\\d*(\\.\\d+)?)(\\+((\\+|\\-)?\\d+(\\.\\d+)?))+",
      "g"
    );
    let h = str.match(pReg);
    if (h) {
      for (let i = 0; i < h.length; i++) {
        str = str.replace(h[i], plus(h[i]));
      }
    }
  }

  if (/\-/.test(str) == true) {
    let mReg = new RegExp(
      "(\\+|\\-)?(\\d*(\\.\\d+)?)(\\-((\\+|\\-)?\\d+(\\.\\d+)?))+",
      "g"
    );
    str = "0" + str;
    let j = str.match(mReg);
    if (j) {
      for (let i = 0; i < j.length; i++) {
        str = str.replace(j[i], minus(j[i]));
      }
    }
  }

  return times(str + "*1").toString();
}
