import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import About from "./pages/About";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { Appbar } from "react-native-paper";

import { createDrawerNavigator } from "@react-navigation/drawer";

const store = configureStore();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ title: " کاربران" }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "درباره کارشناسان" }}
          />
        </Stack.Navigator>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Contact" component={About} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
