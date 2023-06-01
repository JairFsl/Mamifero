import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";

export function Tela1({ navigation }: { navigation: any }) {
  // const navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, backgroundColor: "#FF0000", justifyContent: "center" }}
    >
      <Button title="Entrar" onPress={() => navigation.navigate("Tela2")} />
    </View>
  );
}
