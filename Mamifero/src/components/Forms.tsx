import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { useState } from "react";

export function Forms() {
  const [clicked, setClicked] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.forms}>
      <TextInput style={styles.input} placeholder="Informe o habitat..." />
      <TextInput
        style={styles.input}
        placeholder="Informe o comida favorita..."
      />
      <TextInput style={styles.input} placeholder="Informe o descrição..." />
      <TextInput
        style={styles.input}
        placeholder="Informe o quantidade de patas..."
      />
      <TextInput
        style={styles.input}
        placeholder="Informe se o esquilo hibernou..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  forms: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },

  input: {
    backgroundColor: "#CCCCCC",
    borderRadius: 5,

    width: "75vw",

    margin: 10,
    padding: 8,
  },
});
