import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";

const HomePage = () => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [updateTheData, setUpdateTheData] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [isSaved]);

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 95,
      });
    } catch (e) {
      console.error("Error adding document", e);
    }
  };

  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
    } catch (error) {}
  };

  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", value);
      await updateDoc(lessonData, {
        content: updateTheData || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder="enter your data"
        style={{
          borderWidth: 1,
          width: "50%",
          paddingVertical: 10,
          textAlign: "center",
          marginBottom: 10,
        }}
      />

      {data.map((value) => {
        return (
          <Pressable
            onPress={() => [
              updateData(value.id),
              setIsSaved(isSaved === false ? true : false),
            ]}
            key={value.id}
          >
            <Text>{value?.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </Pressable>
        );
      })}

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

      <CustomButton
        title="Logout"
        buttonColor="red"
        pressedButtonColor="gray"
        handleOnPress={handleLogout}
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
