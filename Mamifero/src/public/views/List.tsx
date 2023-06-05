import { useNavigation } from "@react-navigation/native";

import { View, Text, FlatList, StyleSheet } from "react-native";

import { useEffect, useState } from "react";

import { ItemList } from "../../components/ItemList";
import { SearchBar } from "../../components/SearchBar";
import { SearchInfo } from "../../components/SearchInfo";

import axios from "axios";

import { dataTypes } from "../../services/types";

export function List() {
  const navigation = useNavigation();

  const [data, setData] = useState<dataTypes[]>([] as dataTypes[]);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    await axios
      .get("http://localhost:3000/listar")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        } else {
          console.log("Erro ao localizar os Esquilos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.search_place}>
        <SearchBar />
      </View>
      <SearchInfo />

      <View style={styles.container_data}>
        <View style={styles.line} />
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 15,
    marginLeft: 10,
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

  container_data: {
    flex: 1,
    paddingBottom: 1,
    marginTop: 20,
  },

  line: {
    alignSelf: "center",
    position: "absolute",
    width: 100,
    borderColor: "#fff",
    borderWidth: 1,
    borderStartWidth: 100,
    borderEndWidth: 100,
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
