import { useNavigation } from "@react-navigation/native";
import Ionic from "react-native-vector-icons/Ionicons";

import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

import { ItemList } from "../../components/ItemList";
import { SearchBar } from "../../components/SearchBar";
import { SearchInfo } from "../../components/SearchInfo";

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

  return (
    <View style={styles.container}>
      <View style={styles.search_place}>
        {/* <TextInput
          style={styles.text_input}
          placeholder={"O que está procurando?"}
        />

        <TouchableOpacity onPress={() => {}}>
          <Ionic name="search" size={28} />
        </TouchableOpacity> */}

        <SearchBar />
      </View>
      <SearchInfo></SearchInfo>

      <View
        style={{
          flex: 1,
          paddingBottom: 1,
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "200%",
            borderColor: "#fff",
            borderWidth: 1,
            marginLeft: -100,
          }}
        />
        <FlatList
          style={styles.flatlist}
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
    backgroundColor: "#1A5F7A",
    justifyContent: "center",
    alignItems: "center",
  },

  search_place: {
    width: "45%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },

  button: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  search_info: {
    justifyContent: "space-between",
    fontSize: 12,
    textAlign: "center",
  },

  text_input: {
    backgroundColor: "#CCCCCC",
    borderRadius: 20,
    borderColor: "#fff",
    borderStyle: "solid",
    padding: 10,
  },

  flatlist: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    alignSelf: "center",
    width: "105%",
  },
});
