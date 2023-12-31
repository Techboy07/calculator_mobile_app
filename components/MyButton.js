import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { useSelector } from "react-redux";

const MyButton = ({ innerText, customStyles = {}, whenPressed }) => {
  const themeState = useSelector((state) => state.theme.value);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
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
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
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
