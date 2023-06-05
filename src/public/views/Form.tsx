import { useNavigation } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";

export function Form() {
  const navigation = useNavigation();

  function abrirTela2() {
    navigation.navigate("List");
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text>Adicione novos Esquilos</Text>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#1A5F7A",
  },

  container: {
    flex: 1,
    backgroundColor: "#1A5F7A",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});
