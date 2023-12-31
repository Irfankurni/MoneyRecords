import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native';
import { SplashScreen } from './src/pages/splash/SplashScreen';
import { RootStackParamList } from './src/navigation/types';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './src/pages/home/HomeTab';

type Props = {}


const App = (props: Props) => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2"/>
      <Stack.Navigator 
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='HomeTab' component={HomeTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App