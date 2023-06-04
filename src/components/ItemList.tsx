import { View, Text, StyleSheet } from "react-native";
// import { CONFIG } from "../services/THEME";

import { dataTypes } from "../services/types";

interface Props {
  item: dataTypes;
}

export function ItemList({ item }: Props) {
  if (item.hibernacao == true) {
    var hibernacao = "Hibernou";
  } else {
    var hibernacao = "Não hibernou";
  }

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.text_title}>Habitat: </Text>
        <Text>{item.habitat}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text_title}>Comida: </Text>
        <Text style={styles.text}>{item.comidaFavorita}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text_title}>Descrição: </Text>
        <Text style={styles.text}>{item.descricao} </Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text_title}>Quatidade de Patas: </Text>
        <Text style={styles.text}>{Number(item.quantidadePatas)}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.text_title}>Hibernação: </Text>
        <Text style={styles.text}>{hibernacao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#124B62",
    margin: 5,
    borderRadius: 10,
    padding: 8,
    borderColor: "#9f1239",
  },

  text_title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  text: {
    fontSize: 12,
    alignSelf: "center",
  },

  line: {
    flexDirection: "row",
  },
});
