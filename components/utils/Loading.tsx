import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";
interface LoadingProps {
  changeIsLoading: () => void;
}
const Loading: React.FC<LoadingProps> = ({ changeIsLoading }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => changeIsLoading()}></Pressable>
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

    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
});
