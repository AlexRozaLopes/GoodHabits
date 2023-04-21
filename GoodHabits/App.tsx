import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./@types/screens/home/home";

export default function App() {
  return (
    <NavigationContainer>
      <Home></Home>
    </NavigationContainer>
  );
}
