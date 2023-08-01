import { useEffect } from "react"
import { Image, StyleSheet, View } from "react-native"
import { RootStackScreenProps } from "../../navigation/types";
import { getData } from "../../services/auth.service";


export const SplashScreen = ({navigation}: RootStackScreenProps<'Splash'>) => {

    useEffect(() => {
      setTimeout(() => {
            navigation.replace('Login');
      }, 3000);
    }, [])

    const checkData = async () => {
        const data = await getData();
        return data;
    }    
    
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/bg.png')} style={{ width: 110, height: 110 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center"
    }
})