import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationController from './src/navigation/navigation-controller';
import * as Notifications from 'expo-notifications';
import * as Updates from 'expo-updates';
import { useEffect, useRef, useState } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/poppins-regular.ttf'),
    'poppins-semibold': require('./assets/fonts/poppins-semibold.ttf'),
  });
  const [notification, setNotification] = useState<any>(false);
  const notificationListener = useRef<any | null>(null);
  const responseListener = useRef<any | null>(null);

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      // Asegúrate de que las suscripciones existen antes de intentar removerlas
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  useEffect(() => {
    async function updateApp() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (!__DEV__) {
      updateApp();
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationController />;
}
