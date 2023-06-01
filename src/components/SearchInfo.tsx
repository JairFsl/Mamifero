import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import Ionic from "react-native-vector-icons/Ionicons";

import { useState } from "react";

export function SearchInfo() {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Fechando informações!");
          setModal(!modal);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Você pode procurar um dos Esquilos pelo seu Habitat, sua Comida
              Favorita ou sua Descrição!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(!modal)}
            >
              <Text style={styles.textButton}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModal(true)}>
        <Ionic
          style={{
            marginTop: 10,
            textAlign: "center",
          }}
          name="information-circle"
          size={31}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    margin: 10,
    backgroundColor: "#CCCCCC",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 20,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    width: 200,
  },

  buttonClose: {
    marginTop: 10,
    backgroundColor: "#002B5B",
  },

  textButton: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 50,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
});
