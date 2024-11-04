import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Loading, CustomTextInput, CustomButton } from "../utils/";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "@/redux/userSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { login, autoLogin } from "@/redux/userSlice";
import type { RootState } from "@/redux/store";
import { AppDispatch } from "@/redux/store";

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
  const { isLoading } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Welcome</Text>

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        title="Login"
        handleOnPress={() => dispatch(login({ email, password }))}
        buttonColor="blue"
        pressedButtonColor="gray"
      />
      <CustomButton
        title="Sign Up"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
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
