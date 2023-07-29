import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainStyle } from '../../styles/styles'
import Input from '../../components/Input'
import { Button } from 'react-native-paper'
import { RootStackScreenProps } from '../../navigation/types'


const LoginScreen = ({ navigation }: RootStackScreenProps<'Login'>) => {
    const onChangeEmail = (text: string) => {
        console.log(text);
    }
    const onChangePassword = (text: string) => {
        console.log(text);
    }
    const navigateRegister = () => {
        navigation.navigate('Register');
    }
    const navigateHome = () => {
        navigation.replace('HomeTab', {
            screen: 'Home',
            params: undefined
        });
    }
    return (
        <View style={[mainStyle.mainContainer, styles.container]}>
            <Image source={require('../../../assets/bg.png')} style={{ width: 110, height: 110, marginBottom: 77 }} />
            <View>
                <Input
                    placeholder='Email Address'
                    onChangeText={onChangeEmail}
                    keyboardType='email-address' />
                <Input
                    placeholder='Password'
                    onChangeText={onChangePassword}
                    secureTextEntry={true} />
            </View>
            <Button mode="contained-tonal"
                // loading={loading}
                // disabled={disabled}
                style={[mainStyle.button, { width: 150 }]}
                contentStyle={{ padding: 8 }}
                labelStyle={mainStyle.buttonLabel}
                onPress={navigateHome}>
                Login
            </Button>
            <View style={styles.footer}>
                <Text style={styles.footerLabel}>Belum punya akun?  </Text>
                <Pressable onPress={navigateRegister}>
                    <Text style={[styles.footerLabel, { color: '#767AE7' }]}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        position: 'absolute',
        bottom: 16,
        flexDirection: 'row'
    },
    footerLabel: {
        fontFamily: 'Poppins-Regular'
    }
})