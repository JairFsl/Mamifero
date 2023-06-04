// SearchBar.js

import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { useState } from "react";

import Ionic from "react-native-vector-icons/Ionicons";

export function SearchBar() {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
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
      {/* {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "150%",
    backgroundColor: "#CCCCCC",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "150%",
    backgroundColor: "#CCCCCC",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
