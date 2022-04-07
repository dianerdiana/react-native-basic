//Import React Native Gesture Handler
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, extendTheme, Box } from "native-base";

import Container from "./Container";
import Todo from "./src/screen/Todo";

export default function App() {
  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
