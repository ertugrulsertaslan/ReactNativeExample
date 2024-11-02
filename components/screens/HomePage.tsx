import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { DocumentData } from "firebase/firestore";
import { CustomButton } from "../utils";
const HomePage = () => {
  const [data, setData] = useState<DocumentData[]>([]);
  console.log("data", data);
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
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    querySnapshot.forEach((doc) => {
      const docsArray = querySnapshot.docs.map((doc) => doc.data());
      setData(docsArray);
    });
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
      <CustomButton
        title="Get Data"
        buttonColor="blue"
        pressedButtonColor="gray"
        handleOnPress={getData}
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
