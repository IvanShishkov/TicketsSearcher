import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { THEME } from '../../theme'

export const AppButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.button}
        >
            <View style={styles.wrapper}>{children}</View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 4,
        backgroundColor: THEME.COLOR_WHITE,
        alignItems: 'stretch',
    },
    wrapper: {
        flexDirection: 'column',
    },
})
