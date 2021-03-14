import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import About from "./screens/About";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { createDrawerNavigator } from "@react-navigation/drawer";

const store = configureStore();
const Stack = createStackNavigator();
// const Draw = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
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

        {/* <Draw.Navigator initialRouteName="Home">
          <Draw.Screen
            options={{ title: " کاربران" }}
            name="Home"
            component={Home}
          />
          <Draw.Screen
            name="About"
            component={About}
            options={{ title: "درباره کارشناسان" }}
          />
        </Draw.Navigator> */}
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
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
});
