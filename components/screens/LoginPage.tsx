import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Loading from "@/components/Loading";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginPage: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setResult(`${email} ${password}`);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text>Email</Text>
      <TextInput
        keyboardType="email-address"
        style={styles.textInputStyle}
        placeholder="Enter Your Email"
        placeholderTextColor="black"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        keyboardType="default"
        style={styles.textInputStyle}
        secureTextEntry={true}
        placeholder="Enter Your Password"
        placeholderTextColor="black"
        onChangeText={(value) => setPassword(value)}
        value={password}
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
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightgray",
          },
          styles.signUpButton,
        ]}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
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
  loginButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  signUpButtonText: {
    fontWeight: "bold",
    color: "black",
  },
  signUpButton: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
