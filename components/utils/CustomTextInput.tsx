import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

interface CustomTextInputProps {
  title: string;
  isSecureText: boolean;
  handleOnChangeText: (text: string) => void;
  handleValue: string;
  handlePlaceholder: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  title,
  isSecureText,
  handleOnChangeText,
  handleValue,
  handlePlaceholder,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxTex}>{title}</Text>
      <TextInput
        style={styles.textInputStyle}
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        placeholderTextColor="black"
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBoxTex: {
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  textInputStyle: {
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
  },
});
