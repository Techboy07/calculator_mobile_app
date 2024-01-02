import { StyleSheet, Text, View, Pressable, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useRef } from "react";

const MyButton = ({ innerText }) => {
  const initialState = useRef(new Animated.Value(1)).current;

  const myAnim = Animated.timing(initialState, {
    toValue: 0.3,
    duration: 200,
    useNativeDriver: true,
  });

  const myAnim2 = Animated.timing(initialState, {
    toValue: 1,
    duration: 400,
    useNativeDrver: true,
  });

  const fadeIn = () => {
    myAnim.start();
  };

  const fadeOut = () => {
    myAnim.stop();
    myAnim2.start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: initialState,
        },
      ]}
    >
      <Pressable
        onPressIn={() => {
          fadeIn();
        }}
        onPressOut={() => {
          fadeOut();
        }}
      >
        <BlurView intensity={60} style={[styles.body]}>
          <Text style={styles.text}>{innerText}</Text>
        </BlurView>
      </Pressable>
    </Animated.View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderColor: "white",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
    shadowColor: "#38B9FF",
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
