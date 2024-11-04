import Animated, { BounceIn } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { CustomButton } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput, saveData } from "@/redux/dataSlice";

const HomePage = () => {
  const { data, userInput } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
    } catch (error) {}
  };
  /*
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
*/

  const handleTextInput = (text) => {
    dispatch(setUserInput(text));
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={BounceIn.delay(100 * index + 1)}
        style={styles.flatlistContainer}
      >
        <Pressable
          onPress={() => deleteData(item.id)}
          style={styles.iconContainer}
        >
          <AntDesign name="checkcircleo" size={24} color="black" />
          <Entypo name="circle" size={24} color="black" />
        </Pressable>

        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>

      <FlatList
        style={styles.flatlist}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.userInputContainer}>
        <TextInput
          value={userInput}
          onChangeText={handleTextInput}
          placeholder="Add To Do"
          style={styles.textInput}
        />
        <CustomButton
          title="Save"
          flexValue={1}
          buttonColor="blue"
          pressedButtonColor="gray"
          handleOnPress={() => dispatch(saveData(userInput))}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  flatlistContainer: {
    marginVertical: 10,
    borderBottomWidth: 0.3,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flatlist: {
    width: "90%",
    padding: 10,
  },
  itemContainer: {
    flex: 5,
    marginLeft: 10,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  userInputContainer: {
    width: "90%",
    flexDirection: "row",
    marginBottom: 20,
  },
  textInput: {
    flex: 3,
    paddingVertical: 5,
    textAlign: "center",
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
