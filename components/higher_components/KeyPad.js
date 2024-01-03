import { StyleSheet, Text, View } from "react-native";
import NumericKeypad from "./NumericKeypad";
import OperatorKeypad from "./OperatorKeypad";
import FunctionKeypad from "./FunctionKeypad";
import { useSelector } from "react-redux";

const KeyPad = () => {
  const themeState = useSelector((state) => state.theme.value);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: themeState ? "#17181A" : "rgba(255,255,255,1)",
      }}
    >
      <FunctionKeypad />
      <View style={styles.flexed}>
        <NumericKeypad />
        <OperatorKeypad />
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    gap: 20,
    width: "100%",
    alignItems: "center",
    padding: 0,
    paddingHorizontal: 20,
  },
  flexed: {
    flexDirection: "row",
    gap: 20,
  },
});
