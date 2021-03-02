import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Linking,
  navigation,
  Button,
  Switch,
} from "react-native";
import { TextInput } from "react-native-paper";
import { bold } from "ansi-colors";
import Chart from "./Chart";

const Home = (props) => {
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={(styles.maincontainer, { flexDirection: "column" })}>
      <View style={(styles.maincontainer, { flexDirection: "row" })}>
        <TouchableHighlight
          style={[styles.innerdivs, { backgroundColor: "pink" }]}
          onPress={() => {}}
        >
          <View style={styles.button}>
            <Text style={styles.textstyle}>اطلاعات</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.innerdivs, { backgroundColor: "#00FFFF" }]}
          onPress={() => {
            //navigation.navigate("About");
            props.navigation.navigate("About");
          }}
        >
          <View style={styles.button}>
            <Text style={styles.textstyle}>خدمات</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View>
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
        </View>
        <Button
          style={{ height: 40, margin: 10 }}
          title="ثبت نام"
          color="#841584"
          accessibilityLabel="ثبت نام"
        />
      </View>
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerdivs: {
    flex: 1,
    borderRadius: 5,
    height: 200,
    padding: 10,
    margin: 5,
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
    padding: 5,
  },
});

export default Home;
