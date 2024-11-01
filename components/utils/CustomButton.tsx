import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handleOnPress: () => void;
  buttonColor: string;
  pressedButtonColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handleOnPress,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <Pressable
      onPress={() => handleOnPress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
