import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainStyle } from '../../styles/styles'
import Input from '../../components/Input'
import { Button } from 'react-native-paper'
import { RootStackScreenProps } from '../../navigation/types'

const RegisterScreen = ({ navigation }: RootStackScreenProps<'Register'>) => {
    const onChangeName = (text: string) => {
        console.log(text)
    }
    const onChangeEmail = (text: string) => {
        console.log(text)
    }
    const onChangePassword = (text: string) => {
        console.log(text)
    }
    const navigateLogin = () => {
        navigation.pop();
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
                    placeholder='Nama'
                    onChangeText={onChangeName} />
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
                Register
            </Button>
            <View style={styles.footer}>
                <Text style={styles.footerLabel}>Sudah punya akun?  </Text>
                <Pressable onPress={navigateLogin}>
                    <Text style={[styles.footerLabel, { color: '#767AE7' }]}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RegisterScreen

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