import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Theme Native Base
import { useTheme } from "native-base";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

// Create Stack Navigation
const Stack = createStackNavigator();

import MyCalculator from "./src/screen/MyCalculator";
import Todo from "./src/screen/Todo";

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="MyCalculator"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "MyCalculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          } else if (route.name == "Todo") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="MyCalculator"
        component={MyCalculator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Container() {
  // Init Theme
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
