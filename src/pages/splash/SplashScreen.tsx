import { useEffect } from "react"
import { Image, StyleSheet, View } from "react-native"
import { RootStackScreenProps } from "../../navigation/types";
import { getData } from "../../services/auth.service";
import { getAnalysis } from "../../services/history.service";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";


export const SplashScreen = ({navigation}: RootStackScreenProps<'Splash'>) => {

    useEffect(() => {
      setTimeout(() => {
        getAnalysis().then(res => {
            navigation.replace('HomeTab', {
                screen: 'Home',
                params: undefined
            });
        }).catch(error => {
            navigation.replace('Login');
        });
      }, 3000);
    }, [])  
    
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
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