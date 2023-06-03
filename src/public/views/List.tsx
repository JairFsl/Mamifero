import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";

export function List() {
  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#ab3030", justifyContent: "center" }}
    >
      <Button
        title="Voltar ao início"
        onPress={() => navigation.navigate("Home")}
      />

      <Button title="Entrar" onPress={() => navigation.navigate("Form")} />
    </View>
  );
}
