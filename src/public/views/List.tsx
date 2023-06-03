import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { dataTypes } from "../../services/types";
import { ItemList } from "../../components/ItemList";

export function List() {
  const navigation = useNavigation();

  const data = [
    {
      id: 123,
      habitat: "Cidade",
      comidaFavorita: "Jaca",
      descricao: "Pequeno roedor que vive em árvores pela cidade!",
      quantidadePatas: 4,
      sexo: "Macho",
      hibernacao: false,
    },
    {
      id: 312,
      habitat: "planeta",
      comidaFavorita: "maça",
      descricao: "Pequeno roedor que vive em árvores pelo planeta!",
      quantidadePatas: 6,
      sexo: "Macho",
      hibernacao: true,
    },
    {
      id: 456,
      habitat: "floresta",
      comidaFavorita: "manga",
      descricao: "Pequeno roedor que vive em árvores pela floresta!",
      quantidadePatas: 2,
      sexo: "Fêmea",
      hibernacao: false,
    },
    {
      id: 7657,
      habitat: "floresta",
      comidaFavorita: "manga",
      descricao: "Pequeno roedor que vive em árvores pela floresta!",
      quantidadePatas: 2,
      sexo: "Fêmea",
      hibernacao: false,
    },
    {
      id: 324234234,
      habitat: "floresta",
      comidaFavorita: "manga",
      descricao: "Pequeno roedor que vive em árvores pela floresta!",
      quantidadePatas: 2,
      sexo: "Fêmea",
      hibernacao: false,
    },
    {
      id: 234252356,
      habitat: "floresta",
      comidaFavorita: "manga",
      descricao: "Pequeno roedor que vive em árvores pela floresta!",
      quantidadePatas: 2,
      sexo: "Fêmea",
      hibernacao: false,
    },
    {
      id: 463434656,
      habitat: "floresta",
      comidaFavorita: "manga",
      descricao: "Pequeno roedor que vive em árvores pela floresta!",
      quantidadePatas: 2,
      sexo: "Fêmea",
      hibernacao: false,
    },
  ];

  interface Props {
    item: dataTypes;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <Text style={styles.text_search}>
        Você pode procurar um dos Esquilos pelo seu <b>Habitat</b>, sua{" "}
        <b>Comida Favorita</b> ou sua <b>Descrição</b>!
      </Text>

      <View
        style={{
          flex: 1,
          paddingBottom: 10,
          marginTop: 20,
        }}
      >
        <FlatList
          style={{
            flex: 1,
            marginLeft: 20,
            marginRight: 15,
            padding: 5,
          }}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ItemList item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ab3030",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
    width: 200,
    padding: 5,
  },

  text_search: {
    fontSize: 12,
    textAlign: "center",
  },
});
