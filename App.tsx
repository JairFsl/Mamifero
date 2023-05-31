import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Tela1 } from "./src/public/views/Tela1";
import { Tela2 } from "./src/public/views/Tela2";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.font}>Hello dsa!!!!</Text>
        <StatusBar style="auto" />
      </View>

      <Tela1 />
      <Tela2 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  font: {
    color: "#fff",
  },
});
