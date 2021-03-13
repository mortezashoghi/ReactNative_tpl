import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Linking,
  navigation,
  Switch,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { bold } from "ansi-colors";
import Chart from "./Chart";
import { connect } from "react-redux";
import { registerNewUser } from "../redux";
import { Directions } from "react-native-gesture-handler";
import Production from "./production";
const Home = (props) => {
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }}>
          <View
            style={
              (styles.maincontainer, { flexDirection: "row", height: "100%" })
            }
          >
            <TouchableHighlight
              style={[styles.innerdivs, { backgroundColor: "#ea8e38" }]}
              onPress={() => {
                props.navigation.navigate("About");
              }}
            >
              <Text style={styles.textstyle}>سان شاین</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.innerdivs, { backgroundColor: "#00FFFF" }]}
              onPress={() => {
                props.navigation.navigate("About");
              }}
            >
              <Text style={styles.textstyle}>خدمات</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ flex: 2, backgroundColor: "steelblue" }}>
          <Production />
        </View>

        <View style={{ flex: 3 }}>
          <TextInput
            type="flat"
            style={styles.inputStyle}
            label="موبایل"
            value={mobile}
            onChangeText={(mobile) => setMobile(mobile)}
            placeholder="شماره موبایل"
            keyboardType={"numeric"}
          ></TextInput>
          <TextInput
            type="flat"
            style={styles.inputStyle}
            label="ایمیل"
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder="ایمیل"
          ></TextInput>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text>موافق دریافت ایمیل هستم</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              value={props.result}
            />
          </View>
          <Button
            icon=""
            mode="contained"
            style={(styles.btn, { height: 40, margin: 5 })}
            color="#841584"
            onPress={() =>
              props.register({ mobile: mobile, email: email, agree: isEnabled })
            }
          >
            ثبت نام
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  innerdivs: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    height: "100%",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textstyle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
  },
  inputStyle: {
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    padding: 2,
  },
  btn: { flexDirection: "row" },
});
const mapStateToProps = (state) => {
  return {
    result: state.regReducer.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (info) => dispatch(registerNewUser(info)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
