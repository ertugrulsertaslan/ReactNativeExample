import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

import RootNavigation from "../components/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
}
