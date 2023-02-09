import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../pages/HomeScreen';
import DetailScreen from '../../pages/DetailScreen';
import OnBoardingScreen from '../../pages/OnboardingScreen';

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName='OnBoarding'>
                <Screen name='OnBoarding' component={OnBoardingScreen}></Screen>
                <Screen name='Home' component={HomeScreen}></Screen>
                <Screen name='Detail' component={DetailScreen}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}
