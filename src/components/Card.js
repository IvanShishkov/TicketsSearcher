import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { THEME } from '../theme'
import { toggleHeart, pinkHeart, emptyHeart } from '../store/actions/card'

export const Card = ({ card, route }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useSelector((state) => state.card.favouritesCards)

    useEffect(() => {
        dispatch(pinkHeart())
    }, [dispatch])
    const pink = useSelector((state) => state.card.pinkHeart)

    useEffect(() => {
        dispatch(emptyHeart())
    }, [dispatch])
    const empty = useSelector((state) => state.card.emptyHeart)

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Open', { cardId: card.id })}
            style={{ margin: 20, marginBottom: -1 }}
        >
            <View style={styles.card}>
                <View style={styles.top}>
                    <View style={styles.first}>
                        <Image source={require('../../assets/Vector.png')} />
                    </View>
                    <View style={styles.second}>
                        <View style={styles.insideSecond}>
                            <Text
                                style={
                                    (styles.text,
                                    { fontSize: 17, marginRight: 8 })
                                }
                            >
                                Moscow
                            </Text>
                            <Feather
                                name="arrow-right"
                                size={15}
                                color={THEME.ARROW_COLOR}
                                style={{ marginRight: 8 }}
                            />
                            <Text style={(styles.text, { fontSize: 17 })}>
                                New York
                            </Text>
                        </View>
                        <View style={styles.insideSecond}>
                            <Text
                                style={
                                    (styles.text,
                                    {
                                        marginRight: 2,
                                        color: THEME.TEXT_COLOR,
                                        fontSize: 13,
                                    })
                                }
                            >
                                VKO
                            </Text>
                            <MaterialCommunityIcons
                                name="minus"
                                size={15}
                                color={THEME.ARROW_COLOR}
                                style={{ marginRight: 2 }}
                            />
                            <Text
                                style={
                                    (styles.text,
                                    {
                                        marginRight: 2,
                                        color: THEME.TEXT_COLOR,
                                        fontSize: 13,
                                    })
                                }
                            >
                                28 June, 2020
                            </Text>
                            <MaterialCommunityIcons
                                name="minus"
                                size={15}
                                color={THEME.ARROW_COLOR}
                                style={{ marginRight: 2 }}
                            />
                            <Text
                                style={
                                    (styles.text,
                                    { color: THEME.TEXT_COLOR, fontSize: 13 })
                                }
                            >
                                14:50
                            </Text>
                        </View>
                        <View style={styles.insideSecond}>
                            <Text
                                style={
                                    (styles.text,
                                    { color: THEME.TEXT_COLOR, fontSize: 13 })
                                }
                            >
                                Aeroflot
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => dispatch(toggleHeart(card.id))}
                        style={{ marginBottom: 40, padding: 3.5 }}
                    >
                        <View style={styles.thrid}>
                            {card.booked ? pink : empty}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.middle} />
                <View style={styles.bottom}>
                    <Text
                        style={
                            (styles.text,
                            {
                                fontSize: 11,
                                marginTop: 5,
                                color: THEME.TEXT_COLOR,
                            })
                        }
                    >
                        Price:{' '}
                    </Text>
                    <Text style={(styles.text, { fontSize: 17 })}>
                        23 924 ₽
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: THEME.COLOR_WHITE,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    first: {
        marginTop: 19,
        backgroundColor: THEME.PLANE_COLOR_BG,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        marginRight: 20,
    },
    second: {
        marginTop: 19,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginRight: 14,
    },
    insideSecond: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    thrid: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: -5,
    },
    middle: {
        borderWidth: 0.5,
        borderRadius: 2,
        borderColor: THEME.BORDER_COLOR,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 7.5,
        marginBottom: 13,
    },
    text: {
        fontFamily: 'ssp-regular',
    },
})
