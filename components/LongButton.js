import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { useSelector } from "react-redux";

export default function LongButton({
  innerText,
  vertical,
  customStyles = {},
  whenPressed,
}) {
  const themeState = useSelector((state) => state.theme.value);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        width: vertical ? 65 : 120,
        height: vertical ? 110 : 65,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: themeState ? "#303136" : "rgba(255,255,255,1)",
        borderColor: themeState ? "#303136" : "white",
        shadowColor: themeState ? "#303136" : "#38B9FF",
        ...customStyles,
      }}
      onPress={whenPressed}
    >
      <BlurView intensity={0} style={[styles.body]}>
        <Text style={styles.text}>{innerText}</Text>
      </BlurView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  body: {},
  text: {
    color: "#38B9FF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
