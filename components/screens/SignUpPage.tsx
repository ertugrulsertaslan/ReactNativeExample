import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { CustomTextInput, CustomButton, Loading } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/redux/userSlice";

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.user);

  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder="Enter Your Name"
        />
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
          handlePlaceholder="Create Your Password"
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton
          title="Sign Up"
          buttonColor="blue"
          handleOnPress={handleRegister}
          pressedButtonColor="lightgray"
        />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold" }}>
            Already have an acoount? Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  signUp: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
  },
  title: {
    flex: 1,
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  signUpOptions: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});
