import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, bem vindo!</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.button_text}>Entrar</Text>
      </Pressable>
    </View>
  );
}

// Estilização da página

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A5F7A",

    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 10,
  },

  button: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: "#000",
    width: 200,
  },
  button_text: {
    alignSelf: "center",
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});
