import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

import { Home } from "../views/Home";
import { List } from "../views/List";
import { Form } from "../views/Add";

const Tab = createBottomTabNavigator();

export function StackRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#002B5B",
          borderColor: "#002B5B",
          color: "#002B5B",
        },
        tabBarIcon: ({ focused, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "List") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionic name={iconName} size={size} color={"#fff"} />;
        },
      })}
    >
      {/* Tela de abertura */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          headerShown: false,
        }}
      />

      {/* Tela de Listagem dos Esquilos */}
      <Tab.Screen
        name="List"
        component={List}
        options={{
          title: "Lista",
          headerShown: false,
        }}
      />

      {/* Tela de Formulário */}
      <Tab.Screen
        name="Add"
        component={Form}
        options={{
          title: "Adicionar",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
