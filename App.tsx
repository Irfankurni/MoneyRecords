import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native';
import { SplashScreen } from './src/pages/splash/SplashScreen';
import { RootStackParamList } from './src/navigation/types';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './src/pages/home/HomeTab';
import { PaperProvider } from 'react-native-paper';
import LoginScreen from './src/pages/login/LoginScreen';
import RegisterScreen from './src/pages/register/RegisterScreen';

type Props = {}


const App = (props: Props) => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name='Splash' component={SplashScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='HomeTab' component={HomeTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App