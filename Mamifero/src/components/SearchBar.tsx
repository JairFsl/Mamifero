// SearchBar.js

import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { useState } from "react";

import Ionic from "react-native-vector-icons/Ionicons";

export function SearchBar() {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchBar__clicked}>
        <Ionic
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />

        <TextInput
          style={styles.input}
          placeholder="O que você está procurando?"
          value={searchPhrase}
          onChangeText={(e) => {
            setSearchPhrase(e);
          }}
          onFocus={() => {
            setClicked(true);
          }}
        />

        {clicked && (
          <Ionic
            name="close"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100vw",
  },

  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "75vw",
    backgroundColor: "#CCCCCC",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  input: {
    fontSize: 14,

    marginRight: 15,
    marginLeft: 15,

    width: "80vw",
  },
});
