import { StatusBar } from 'expo-status-bar';
import React from "react";
import { MyStack } from "./routes/homestack";
import SignIn from './src/screens/SignIn';
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

 const App = () => {

  const requestUserpermission = async() => {
    const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }

  }

  useEffect(() => {
    if (requestuserPermission()) {
      messaging().getTokens().then(token => {
        console.log(token)
      });
    }
      else {
        console.log("Failed token status" ,authStatus)
      }
      messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
      // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;

  } , [])

  return (
    <MyStack>
       <SignIn/>
     </MyStack>
    //  <SignIn/>
  );
 }


export default App;