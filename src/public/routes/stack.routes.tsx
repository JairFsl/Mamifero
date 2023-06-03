import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../views/Home";
import { List } from "../views/List";
import { Form } from "../views/Form";

const Tab = createBottomTabNavigator();

export function StackRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Tela de abertura */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7f1d1d",
          },
        }}
      />

      {/* Tela de Listagem dos Esquilos */}
      <Tab.Screen
        name="List"
        component={List}
        options={{
          title: "<-",
          headerTransparent: true,
        }}
      />

      {/* Tela de Formulário */}
      <Tab.Screen name="Form" component={Form} />
    </Tab.Navigator>
  );
}
