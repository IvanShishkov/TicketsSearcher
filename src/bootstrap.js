import * as Font from 'expo-font'

export async function bootstrap() {
    try {
        await Font.loadAsync({
            'ssp-bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
            'ssp-regular': require('../assets/fonts/SourceSansPro-Regular.ttf'),
        })
    } catch (e) {
        console.log(e)
    }
}
