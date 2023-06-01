import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, bem vindo!</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Tela1")}
      >
        <Text style={styles.button_text}>Entrar</Text>
      </Pressable>
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
    marginBottom: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  button_text: {
    fontSize: 16,
    lineHeight: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});
