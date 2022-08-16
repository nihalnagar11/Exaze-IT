import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputForm from './InputForm';
import CheckEmulator from './CheckEmulator';
import ButtonScreen from './ButtonScreen';

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="InputForm"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="InputForm" component={InputForm} />
                <Stack.Screen name="CheckEmulator" component={CheckEmulator} />
                <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}