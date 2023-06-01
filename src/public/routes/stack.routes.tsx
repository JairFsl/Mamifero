import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Tela1 } from "../views/Tela1";
import { Tela2 } from "../views/Tela2";
import { Home } from "../views/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      {/* Tela de abertura */}
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#ab3022",
          },
          headerTintColor: "black",
        }}
      />

      {/* Tela de recepção */}
      <Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />

      {/* Tela de Listagem dos Esquilos */}
      <Screen
        name="Tela2"
        component={Tela2}
        options={{
          title: "Lista",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      />
    </Navigator>
  );
}
