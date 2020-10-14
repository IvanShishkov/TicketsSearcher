import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Text,
    Dimensions,
} from 'react-native'

const image1 = {
    uri:
        'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1603670400&Signature=SuLtlzn2WjvOWqiAb72K7Nwa-M7wmhGTkYBBzreti-OHi5gAPXLKbHfkSipXdlQhubPrIbJniJTnOfYg4bWlfymV3q9AldEiVVUyFrIfA1ivrc9~wuY9sdbknc5Qp2wgSWDYUnXhf0JIMhy5uRrMGIaFgY8PijfhMVEOOOqbyZHP~LzAHVxVo8bifvmy8afZoBkyLSTkXgQyF1CK7HM9SchVa30XNeBGMHjNSOouDarej3RSoV07SEizPI8nn67xAQO7DErLMOz9e5k-OIBr8gT78CKnLpIRsKwxLZtkb5ky-AF8RbnR1NXQ6OKUpkv7hgvBoM6q9rbFNY6WinFa9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}
const image2 = {
    uri:
        'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1603670400&Signature=LjCm0ffHQ9P89VSY3I2NbFs-LHpE4lklIL~Ej9kYzCEWXdCEqfBwZ4gOawKB5qqhBTLvANzJcdbPbtecu7sHQyYyc8R88cR2wUtU7yJA4OJ2epVELR1M~0WIIYWf33vg352AuYPZwnw6mss-iJpAsZXzipQJr246~fbCQFkljM02SQbMVmUuEStuaADO2aOUrUC-~CMtUEbT9WY59IR9EKY4K-9d3DtOvBE58xs~SPO5cDcFYRKNK-pG3t1FN-iBAgH2-4m8YnQ6fWI19xCjajHFDOoXl5AchvGhtRNohbZwfGEdFykKIoV4oEb1eo018MBhQmb6FpgAzUu27~W7vA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}

const screenWidth = Math.round(Dimensions.get('window').width)

export const Slider = () => {
    return (
        <View style={styles.wrapper}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ width: `${100 * 2}%` }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    source={image1}
                    style={styles.image}
                >
                    <Text> </Text>
                </ImageBackground>
                <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    source={image2}
                    style={styles.image}
                >
                    <Text> </Text>
                </ImageBackground>
                <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    source={image1}
                    style={styles.image}
                >
                    <Text> </Text>
                </ImageBackground>
                <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    source={image2}
                    style={styles.image}
                >
                    <Text> </Text>
                </ImageBackground>
                <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    source={image1}
                    style={styles.image}
                >
                    <Text> </Text>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 200,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        marginRight: 10,
    },
})
