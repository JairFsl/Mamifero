import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../views/Home";
import { List } from "../views/List";
import { Form } from "../views/Form";

const { Screen, Navigator } = createBottomTabNavigator();

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
            backgroundColor: "#7f1d1d",
          },
        }}
      />

      {/* Tela de Listagem dos Esquilos */}
      <Screen name="List" component={List} />

      {/* Tela de Formulário */}
      <Screen name="Form" component={Form} />
    </Navigator>
  );
}
