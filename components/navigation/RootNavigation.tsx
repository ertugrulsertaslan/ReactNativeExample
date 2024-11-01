import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { app } from "../../firebaseConfig";
const RootNavigation = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <NavigationContainer independent={true}>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
