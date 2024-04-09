import axios from 'axios';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const addPushToken = async (userId: number) => {
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('No se pudo obtener el permiso para notificaciones');
      return;
    }
    const expoPushToken = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig?.extra?.eas?.projectId,
    });

    if (!expoPushToken) {
      console.log('No se pudo obtener el token');
      return;
    }

    // const response = await axios.post(
    //   process.env.EXPO_PUBLIC_API_URL + '/mobile-devices',
    //   {
    //     expoPushToken: expoPushToken.data,
    //     userId: userId,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );

    // return response.data;
    console.log('Falta guarda token en db');
  } catch (error) {
    console.error('Hubo un error al guardar el token:', error);
  }
};
