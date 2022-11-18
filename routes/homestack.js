import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../src/screens/SignIn";
import ForgotPassword from "../src/screens/ForgotPassword";
import Home from "../src/screens/Home";
import TermsConditions from "../src/screens/TermsConditions";
import PrivacyPolicy from "../src/screens/PrivacyPolicy";
import Profile from "../src/screens/Profile";
import Notifications from "../src/screens/Notifications";
import Splash from "../src/screens/Splash";
import AppSettings from "../src/screens/AppSettings";
import ChangePassword from "../src/screens/ChangePassword";
import AboutUs from "../src/screens/AboutUs";
import ContactUs from "../src/screens/ContactUs";
 
const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Splash" component={Splash}/> */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="TermsConditions" component={TermsConditions}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Notifications" component={Notifications}/>
        <Stack.Screen name="AppSettings" component={AppSettings}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="AboutUs" component={AboutUs}/>
        <Stack.Screen name="ContactUs" component={ContactUs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};