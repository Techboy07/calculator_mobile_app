// regex function
export default function matchExact(r, str) {
  let match = str.match(r);
  if (match.join("") == str) {
    return true;
  }
}
