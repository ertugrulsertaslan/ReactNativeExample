import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Loading from "@/components/Loading";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setResult(`${name} ${lastName}`);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Your Name"
        placeholderTextColor="black"
        onChangeText={(value) => setName(value)}
      />
      <Text>Last Name</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Your LastName"
        placeholderTextColor="black"
        onChangeText={(value) => setLastName(value)}
      />
      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "blue",
          },
          styles.buttonStyle,
        ]}
      >
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
      {isLoading ? <Loading /> : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
  },
  buttonStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
