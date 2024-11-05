import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";
import { Loading, CustomTextInput, CustomButton } from "../utils/";
const ProfilePage = () => {
  const { isLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.profileTitle}>ProfilePage</Text>
      <CustomButton
        title="Logout"
        handleOnPress={() => dispatch(logout())}
        buttonColor="red"
        pressedButtonColor="gray"
      />
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  profileTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
