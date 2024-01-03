import { StyleSheet, View } from "react-native";
import React from "react";
import MyButton from "../MyButton";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue, resetInputToValue } from "../../myRedux/inputReducer";
import { setOutputValue } from "../../myRedux/outputreducer.js";
import swap from "../../utils/swap";

const FunctionKeypad = () => {
  const dispatch = useDispatch();
  const inputState = useSelector((state) => state.input.value);
  const themeState = useSelector((state) => state.theme.value);

  return (
    <View style={styles.container}>
      <MyButton
        innerText={"Ac"}
        vertical
        whenPressed={() => {
          dispatch(resetInputToValue(""));
          dispatch(setOutputValue(""));
        }}
      />

      <MyButton
        innerText={""}
        vertical
        whenPressed={() => {
          let newState = "";
          for (let i = 0; i < inputState.length - 1; i++) {
            newState += inputState[i];
          }
          dispatch(resetInputToValue(newState));
        }}
      />
      <MyButton
        innerText={"/"}
        vertical
        customStyles={{
          borderColor: themeState ? "#005DB2" : "#ADE2FF",
          backgroundColor: themeState ? "#005DB2" : "#ADE2FF",
        }}
        whenPressed={() => {
          const myKey = swap("/", "*", inputState, (newState) => {
            dispatch(resetInputToValue(newState));
          });
          dispatch(setInputValue(myKey));
        }}
      />

      <MyButton
        innerText={"*"}
        vertical
        customStyles={{
          borderColor: themeState ? "#005DB2" : "#ADE2FF",
          backgroundColor: themeState ? "#005DB2" : "#ADE2FF",
        }}
        whenPressed={() => {
          const myKey = swap("*", "/", inputState, (newState) => {
            dispatch(resetInputToValue(newState));
          });
          dispatch(setInputValue(myKey));
        }}
      />
    </View>
  );
};

export default FunctionKeypad;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
});
