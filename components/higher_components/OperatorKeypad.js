import { StyleSheet, View } from "react-native";
import React from "react";
import MyButton from "../MyButton";
import LongButton from "../LongButton";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue, resetInputToValue } from "../../myRedux/inputReducer";
import { setOutputValue } from "../../myRedux/outputreducer.js";
import swap from "../../utils/swap";
import evaluate from "../../utils/evaluate.js";

const OperatorKeypad = () => {
  const inputState = useSelector((state) => state.input.value);
  const themeState = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <MyButton
        innerText={"-"}
        whenPressed={() => {
          const myKey = swap("-", "+", inputState, (newState) => {
            dispatch(resetInputToValue(newState));
          });
          dispatch(setInputValue(myKey));
        }}
        customStyles={{
          borderColor: themeState ? "#005DB2" : "#ADE2FF",
          backgroundColor: themeState ? "#005DB2" : "#ADE2FF",
        }}
      />

      <LongButton
        innerText={"+"}
        vertical
        customStyles={{
          borderColor: themeState ? "#005DB2" : "#ADE2FF",
          backgroundColor: themeState ? "#005DB2" : "#ADE2FF",
        }}
        whenPressed={() => {
          const myKey = swap("+", "-", inputState, (newState) => {
            dispatch(resetInputToValue(newState));
          });
          dispatch(setInputValue(myKey));
        }}
      />
      <LongButton
        innerText={"="}
        vertical
        customStyles={{
          borderColor: themeState ? "#1991FF" : "#ADE2FF",
          backgroundColor: themeState ? "#1991FF" : "#ADE2FF",
        }}
        whenPressed={() => {
          const outputValue = evaluate(inputState);
          dispatch(setOutputValue(outputValue));
        }}
      />
    </View>
  );
};

export default OperatorKeypad;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
