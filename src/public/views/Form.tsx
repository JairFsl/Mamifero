import { useNavigation } from "@react-navigation/native";
import { View, Button, Text } from "react-native";

export function Form() {
  const navigation = useNavigation();

  function abrirTela2() {
    navigation.navigate("List");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ab3030",
        justifyContent: "center",
      }}
    >
      <Button title="Voltar para Tela 2" onPress={abrirTela2} />
    </View>
  );
}
