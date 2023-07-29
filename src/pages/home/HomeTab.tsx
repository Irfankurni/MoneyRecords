import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTabParamList } from '../../navigation/types'
import HomeScreen from './HomeScreen'
import Icons from 'react-native-vector-icons/MaterialIcons';
import IncomeScreen from '../income/IncomeScreen';
import OutcomeScreen from '../outcome/OutcomeScreen';
import ProfileScreen from '../profile/ProfileScreen';
import HistoryScreen from '../history/HistoryScreen';
import { StatusBar } from 'react-native';

type Props = {}

const HomeTab = (props: Props) => {
    const HomeTabs = createBottomTabNavigator<HomeTabParamList>();

    return (
        <HomeTabs.Navigator
            screenOptions={{
                headerShown: true,
                    headerStyle: {
                        backgroundColor: '#767AE7',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Poppins-Bold',
                        marginStart: 8
                      },
            }}
            initialRouteName='Home'>
            <HomeTabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <Icons name='home' color={color} size={size} />
                        );
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#767AE7',
                }}
            />
            <HomeTabs.Screen
                name="Income"
                component={IncomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <Icons name='call-received' color={color} size={size} />
                        );
                    },
                }}
            />
            <HomeTabs.Screen
                name="Outcome"
                component={OutcomeScreen}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Icons name='call-made' color={color} size={size} />
                        );
                    },
                }} />
            <HomeTabs.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Icons name='history' color={color} size={size} />
                        );  
                    },
                    title: 'Coming soon'
                }} />
        </HomeTabs.Navigator>
    )
}

export default HomeTab