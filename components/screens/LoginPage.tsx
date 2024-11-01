import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Loading, CustomTextInput, CustomButton } from "../utils/";

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
      <Text style={styles.login}>Welcome {result}</Text>

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        title="Login"
        handleOnPress={() => navigation.navigate("Login")}
        buttonColor="blue"
        pressedButtonColor="gray"
      />
      <CustomButton
        title="Sign Up"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

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
  login: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
  },
});
