export default function swap(key, alt, inputState, reset) {
  lastChar = inputState[inputState.length - 1];
  if (lastChar === key) {
    return "";
  } else if (lastChar === alt) {
    // take the whole state and change the last element to key
    modifyState(inputState, reset);
    //    modify state is a side effect
    return key;
  } else {
    return key;
  }
}

function modifyState(state, resetState) {
  let newState = "";
  for (let i = 0; i < state.length - 1; i++) {
    newState += state[i];
  }
  resetState(newState);
}
