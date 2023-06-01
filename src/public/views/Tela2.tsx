import { useNavigation } from "@react-navigation/native";
import { View, Button, Text } from "react-native";

export function Tela2() {
  const navigation = useNavigation();

  function abrirTela2() {
    navigation.navigate("Tela1");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FF0000",
        justifyContent: "center",
      }}
    >
      <Button title="Voltar para Tela 2" onPress={abrirTela2} />
    </View>
  );
}
