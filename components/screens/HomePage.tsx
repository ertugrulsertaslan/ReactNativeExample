import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { CustomButton } from "../utils";
const HomePage = () => {
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 95,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      console.error("Error adding document", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <CustomButton
        title="Save"
        buttonColor="blue"
        pressedButtonColor="gray"
        handleOnPress={sendData}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
