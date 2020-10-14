import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from '../screens/MainScreen'
import { OpenCardScreen } from '../screens/OpenCardScreen'

const Stack = createStackNavigator()

export const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontFamily: 'ssp-bold',
                    fontSize: 17,
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
            }}
        >
            <Stack.Screen name="Flights" component={MainScreen} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Open"
                component={OpenCardScreen}
            />
        </Stack.Navigator>
    )
}
