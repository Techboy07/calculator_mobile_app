import { StyleSheet, Text, View, Switch, Appearance } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../myRedux/themeReducer";
import { useEffect } from "react";
const Screen = () => {
  const inputState = useSelector((state) => state.input.value);
  const outputState = useSelector((state) => state.output.value);
  const themeState = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    if (colorScheme === "dark") {
      dispatch(setTheme(true));
    }
  }, [colorScheme]);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: themeState ? "#17181A" : null,
      }}
    >
      <Switch
        style={styles.switch}
        onValueChange={() => {
          dispatch(setTheme(!themeState));
        }}
        value={themeState}
      />
      <View>
        <Text
          style={{
            ...styles.input,
            color: themeState ? "#818181" : "#000",
          }}
        >
          {inputState}
        </Text>
      </View>
      <View>
        <Text style={{ ...styles.output, color: themeState ? "#fff" : "#000" }}>
          ={outputState}
        </Text>
      </View>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    gap: 30,
    paddingHorizontal: 50,
  },
  input: {
    fontSize: 20,
  },
  output: { fontSize: 40, fontWeight: "600" },
  switch: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});
