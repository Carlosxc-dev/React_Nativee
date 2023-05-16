import {StyleSheet} from 'react-native';
import {
    DefaultTheme,
    NavigationContainer,
  } from '@react-navigation/native';
  

export const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };