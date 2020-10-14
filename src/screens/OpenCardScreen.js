import React, { useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'

import { emptyHeart, pinkHeart, toggleHeart } from '../store/actions/card'
import { THEME } from '../theme'
import { Slider } from '../components/ui/Slider'

const image = {
    uri:
        'https://s3-alpha-sig.figma.com/img/45fb/1500/e86e95e5ba5299e3624f2c6e93584d0e?Expires=1603670400&Signature=cvl97qICA94WPdxZ3WxJV~TPpwDHAN0ltgvcr5HenEsZJjpxzY1VmtbWYxF1fFQcWPu5iJEAU~ogU9D24EoEtiMVgEeURXDE~NSv0Lhp-FhQFBws0Qc0xBfaEwjxuX8ESfAYL4WRzdrjyOW86Pki8GyLZ61PQOpMWtiHpFQdPwqllRkeK4dY4v65G6aPLMsJnAr6mbSeoENgsPi-x7PABF2tlVPqwDNyGGVIHx1JbZPeptr1ukhJtv3whi2~NPFZdS2ewsnnd8l83ltAp-Oz2yHkHOiJEuiPhyMUAdiOx6kDP-3QxYHGxgZhF7PpTdZ3UC3JM5U4njXRpm-9rdo94w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

export const OpenCardScreen = ({ route }) => {
    const dispatch = useDispatch()

    const booked = useSelector((state) => state.card.favouritesCards)

    useEffect(() => {
        dispatch(pinkHeart())
    }, [dispatch])
    const pink = useSelector((state) => state.card.pinkHeart)

    useEffect(() => {
        dispatch(emptyHeart())
    }, [dispatch])
    const empty = useSelector((state) => state.card.emptyHeart)

    return (
        <View style={styles.wrapper}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <View style={{ marginRight: 15 }}>
                            <Text style={styles.textr}>1 Aug, 2020</Text>
                            <Text style={styles.textb}>SVO</Text>
                            <Text style={styles.textr}>Moscow</Text>
                        </View>
                        <Ionicons
                            name="ios-arrow-forward"
                            size={30}
                            color={THEME.ARROW_COLOR}
                            style={{ marginTop: 28 }}
                        />
                        <View style={{ marginRight: -60 }}>
                            <Text style={styles.textr}>11:45</Text>
                            <Text style={styles.textb}>JFK</Text>
                            <Text style={styles.textr}>New York City</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() =>
                                dispatch(toggleHeart(route.params.cardId))
                            }
                            style={{
                                marginTop: -15,
                                marginRight: -15,
                                marginBottom: 80,
                                padding: 3.5,
                            }}
                        >
                            <View>
                                {booked.some(
                                    (card) => card.id === route.params.cardId
                                )
                                    ? pink
                                    : empty}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        style={styles.middle}
                        colors={[THEME.LINEAR_START, THEME.LINEAR_END]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.insideMiddle}>
                            <Text
                                style={{
                                    ...styles.textr,
                                    color: THEME.COLOR_WHITE,
                                }}
                            >
                                Price
                            </Text>
                            <Text
                                style={{
                                    ...styles.textr,
                                    color: THEME.COLOR_WHITE,
                                    fontSize: 20,
                                }}
                            >
                                23 311 ₽
                            </Text>
                        </View>
                        <View style={styles.line}>
                            <Text> </Text>
                        </View>
                        <View style={styles.insideMiddle}>
                            <Text
                                style={{
                                    ...styles.textr,
                                    color: THEME.COLOR_WHITE,
                                }}
                            >
                                Boarding
                            </Text>
                            <Text
                                style={{
                                    ...styles.textr,
                                    color: THEME.COLOR_WHITE,
                                    fontSize: 20,
                                }}
                            >
                                19:20
                            </Text>
                        </View>
                    </LinearGradient>
                    <Slider style="slides" itemsPerInterval={1} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        height: screenHeight / 2,
    },
    container: {
        width: screenWidth,
        height: screenHeight / 1.7,
        backgroundColor: THEME.COLOR_WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 30,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        marginBottom: 17,
    },
    middle: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 17,
        paddingLeft: 31,
        paddingRight: 31,
        marginBottom: 23,
    },
    insideMiddle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        borderColor: THEME.COLOR_WHITE,
        borderTopLeftRadius: 2,
        borderLeftWidth: 1,
        height: 50,
    },
    textr: {
        fontFamily: 'ssp-regular',
        fontSize: 13,
        color: THEME.TEXT_COLOR,
    },
    textb: {
        fontFamily: 'ssp-regular',
        fontSize: 36,
    },
})
