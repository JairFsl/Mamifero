import { View, Text, StyleSheet } from "react-native";

import { dataTypes } from "../services/types";

interface Props {
  item: dataTypes;
}

export function ItemList({ item }: Props) {
  if (item.hibernacao == false) {
    let hibernacao = "Hibernou";
  } else {
    let hibernacao = "Não hibernou";
  }

  return (
    <View style={styles.container}>
      <div style={styles.div}>
        <Text style={styles.text_title}>Habitat: </Text>
        <Text>{item.habitat}</Text>
      </div>
      <div style={styles.div}>
        <Text style={styles.text_title}>Comida: </Text>
        <Text style={styles.text}>{item.comidaFavorita}</Text>
      </div>
      <div style={styles.div}>
        <Text style={styles.text_title}>Descrição: </Text>
        <Text style={styles.text}>{item.descricao} </Text>
      </div>
      <div style={styles.div}>
        <Text style={styles.text_title}>Quatidade de Patas: </Text>
        <Text style={styles.text}>{Number(item.quantidadePatas)}</Text>
      </div>
      <div style={styles.div}>
        <Text style={styles.text_title}>Hibernação: </Text>
        <Text style={styles.text}>{}</Text>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7f1d1d",
    margin: 5,
    borderRadius: 10,
    padding: 8,
    borderColor: "#9f1239",
  },

  div: {
    border: 10,
    borderColor: "#000",
    padding: 2,
  },

  text_title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Arial",
  },

  text: {
    fontSize: 12,
    fontFamily: "Arial",
  },
});
