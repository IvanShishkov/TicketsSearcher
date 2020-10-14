import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import store from './src/store/index'
import { MyStack } from './src/navigation/MyStack'
import { bootstrap } from './src/bootstrap'

export default function App() {
    const [isReady, setIsReady] = useState(false)
    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </Provider>
    )
}
