import { View, Button, Text } from "react-native";

export function Tela2() {
  function openTela1() {
    console.log("Abrindo tela 1!");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
        }}
      >
        Botão para entrar na Tela 1!!!
      </Text>

      <Button title="Entrar" onPress={openTela1}></Button>
    </View>
  );
}
