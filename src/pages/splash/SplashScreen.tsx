import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react"
import { Image, StyleSheet, View } from "react-native"
import { HomeTabParamList, HomeTabScreenProps, RootStackParamList, RootStackScreenProps } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";


export const SplashScreen = ({navigation}: RootStackScreenProps<'Splash'>) => {

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('HomeTab', {
          screen: 'Home',
          params: undefined,
        });
      }, 3000);
    }, [])
    
    
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