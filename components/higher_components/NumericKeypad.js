import { View, StyleSheet } from "react-native";
import MyButton from "../MyButton";
import LongButton from "../LongButton";
import { useDispatch } from "react-redux";
import { setInputValue } from "../../myRedux/inputReducer";
import validateForDecimalPoint from "../../utils/validateForDecimalPoint";

const myKeys = {
  row1: ["9", "8", "7"],
  row2: ["6", "5", "4"],
  row3: ["3", "2", "1"],
};

export default function NumericKeypad() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {myKeys.row1.map((key) => (
          <MyButton
            innerText={key}
            key={key}
            whenPressed={() => {
              dispatch(setInputValue(key));
            }}
          />
        ))}
      </View>
      <View style={styles.buttonRow}>
        {myKeys.row2.map((key) => (
          <MyButton
            innerText={key}
            key={key}
            whenPressed={() => {
              dispatch(setInputValue(key));
            }}
          />
        ))}
      </View>
      <View style={styles.buttonRow}>
        {myKeys.row3.map((key) => (
          <MyButton
            innerText={key}
            key={key}
            whenPressed={() => {
              dispatch(setInputValue(key));
            }}
          />
        ))}
      </View>

      <View style={styles.buttonRow}>
        <MyButton
          innerText={"."}
          whenPressed={() => {
            const point = validateForDecimalPoint(".");
            dispatch(setInputValue(point));
          }}
        />
        <LongButton
          innerText={"0"}
          whenPressed={() => {
            dispatch(setInputValue("0"));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  buttonRow: {
    flexDirection: "row-reverse",
    gap: 20,
  },
});
