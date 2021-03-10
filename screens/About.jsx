import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-paper";
import { getuserslist } from "../redux";
const DATA = [
  {
    id: "1",
    title: "سعید بایرامپور",
  },
  {
    id: "2",
    title: "فرهاد حقیقی",
  },
  {
    id: "3",
    title: "مرتضی شوقی",
  },
  {
    id: "4",
    title: "علی رحیمی",
  },
];

const Item = ({ title }) => (
  <TouchableWithoutFeedback>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const About = (props) => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView
      style={[
        styles.container,
        { alignContent: "center", alignItems: "center" },
      ]}
    >
      <Button
        style={{ width: "80%" }}
        icon=""
        mode="contained"
        onPress={() => props.loadDispatch()}
      >
        بارگذاری
      </Button>
      <FlatList
        key={(item) => item.id}
        style={styles.flatlistStyle}
        data={props.users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "gray",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  flatlistStyle: {
    width: "100%",
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.AboutReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDispatch: () => {
      dispatch(getuserslist());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
