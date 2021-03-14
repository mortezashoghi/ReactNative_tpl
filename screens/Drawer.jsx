import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./About";
import Home from "./Home";
const drawer = createDrawerNavigator();

const DrawerNav = (props) => {
  return (
    <drawer.Navigator>
      <drawer.Screen
        options={{ title: " کاربران" }}
        name="Home"
        component={Home}
      />
      <drawer.Screen
        name="About"
        component={About}
        options={{ title: "درباره کارشناسان" }}
      />
    </drawer.Navigator>
  );
};

export default DrawerNav;
