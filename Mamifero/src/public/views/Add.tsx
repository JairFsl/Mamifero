import { useNavigation } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";

import * as forms from "../../components/Forms";

export function Form() {
  const navigation = useNavigation();

  function abrirTela2() {
    navigation.navigate("List");
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Adicione novos Esquilos</Text>
        <View>
          <View style={styles.line} />
        </View>
        <View style={styles.container_forms}>
          <forms.Forms />
        </View>
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
    alignItems: "center",
    margin: 30,
  },

  container_forms: {
    flex: 1,
    margin: 30,
  },

  title: {
    marginTop: 40,

    fontWeight: "bold",
    fontSize: 28,
  },

  forms: {
    flex: 1,
  },

  line: {
    alignSelf: "center",
    position: "absolute",
    width: 100,
    borderColor: "#fff",
    borderWidth: 1,
    borderStartWidth: 100,
    borderEndWidth: 100,

    marginTop: 10,
    marginBottom: 10,
  },
});
