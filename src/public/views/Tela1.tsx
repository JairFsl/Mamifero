import { View, Button } from "react-native";

export function Tela1() {
  function openTela2() {
    console.log("Vai para a segunda tela!");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FF0000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Entrar" onPress={openTela2} />
    </View>
  );
}
