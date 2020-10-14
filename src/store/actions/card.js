import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import {
    BROWSE,
    FAVOURITES,
    LOAD_CARDS,
    TOGGLE_HEART,
    PINK,
    EMPTY,
    LINE_ON,
    LINE_OFF,
} from '../types'
import { DATA } from '../../data'
import { BrowseScreen } from '../../screens/BrowseScreen'
import { FavouritesScreen } from '../../screens/FavouritesScreen'
import { THEME } from '../../theme'

export const loadCards = () => {
    return {
        type: LOAD_CARDS,
        payload: DATA,
    }
}

export const loadFavouritesScreen = () => {
    return {
        type: FAVOURITES,
        payload: <FavouritesScreen />,
    }
}

export const loadBrowseScreen = () => {
    return {
        type: BROWSE,
        payload: <BrowseScreen />,
    }
}

export const pinkHeart = () => {
    return {
        type: PINK,
        payload: <AntDesign name="heart" size={20} color={THEME.HEART_COLOR} />,
    }
}

export const emptyHeart = () => {
    return {
        type: EMPTY,
        payload: <AntDesign name="hearto" size={20} />,
    }
}

export const lineOn = () => {
    return {
        type: LINE_ON,
        payload: (
            <LinearGradient
                colors={[THEME.LINEAR_START, THEME.LINEAR_END]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ height: 2 }}
            >
                <Text> </Text>
            </LinearGradient>
        ),
    }
}

export const lineOff = () => {
    return {
        type: LINE_OFF,
        payload: (
            <LinearGradient
                colors={[THEME.COLOR_WHITE, THEME.COLOR_WHITE]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{ height: 2 }}
            >
                <Text> </Text>
            </LinearGradient>
        ),
    }
}

export const toggleHeart = (id) => {
    return {
        type: TOGGLE_HEART,
        payload: id,
    }
}
