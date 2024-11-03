import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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
      setData([...data, docsArray]);
    });
  };
  const deleteData = async () => {
    await deleteDoc(doc(db, "dataName", "id"));
  };
  const updateData = async () => {
    try {
      const lessonData = doc(db, "collectionName", "id");
      await updateDoc(lessonData, {
        lesson: 90,
      });
    } catch (error) {}
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
      <CustomButton
        title="Delete Data"
        buttonColor="blue"
        pressedButtonColor="gray"
        handleOnPress={deleteData}
      />
      <CustomButton
        title="Update Data"
        buttonColor="blue"
        pressedButtonColor="gray"
        handleOnPress={updateData}
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
