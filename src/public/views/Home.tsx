import { View, Text, StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, bem vindo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ab3030",

    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: "Dancing Script, cursive",
    fontWeight: "900",
  },
});
