import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    color: "white",
  },
});
