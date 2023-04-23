import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../home/home";
import { Login } from "../page/login";
import { HabitsPage } from "../page/habitsPage";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HabitsPage" component={HabitsPage} />
    </Stack.Navigator>
  );
}
