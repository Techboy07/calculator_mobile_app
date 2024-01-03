import { StatusBar } from "expo-status-bar";
import elipse from "./assets/Ellipse_1.png";
import { Image, StyleSheet, View } from "react-native";

import { BlurView } from "expo-blur";
import Keypad from "./components/higher_components/KeyPad.js";
import Screen from "./components/Screen.js";
import store from "./myRedux/store.js";
import { Provider } from "react-redux";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Image style={styles.background} source={elipse} /> */}
        <BlurView intensity={0} style={styles.cover}>
          <Screen />
          <Keypad />
        </BlurView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: 1000,
    height: 1000,
    position: "absolute",
    left: -75,
    zIndex: -2,
  },
  cover: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
});
