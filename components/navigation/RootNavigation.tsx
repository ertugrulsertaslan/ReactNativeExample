import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "@/components/utils";
import type { RootState } from "@/redux/store";
import { getAllData } from "@/redux/dataSlice";
import { app } from "../../firebaseConfig";
const RootNavigation = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const dispatch = useDispatch();
  const { isLoading, isSaved } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllData());
  }, [isSaved]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer independent={true}>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
