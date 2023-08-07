import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { mainStyle } from '../../styles/styles'
import Input from '../../components/Input'
import { Button } from 'react-native-paper'
import { RootStackScreenProps } from '../../navigation/types'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { register, saveData } from '../../services/auth.service'

const RegisterScreen = ({ navigation }: RootStackScreenProps<'Register'>) => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [body, setBody] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const onChangeName = (text: string) => {
        setBody({...body, fullName: text})
    }
    const onChangeEmail = (text: string) => {
        setBody({...body, email: text})
    }
    const onChangePassword = (text: string) => {
        setBody({...body, password: text})
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

    const onSubmit = () => {
        console.log(body);
        setLoading(true);
        setDisabled(true);
        register(body).then(res => {
            saveData(res);
            navigateHome();
        }).catch(err => {
            console.log(err)
            setLoading(false);
            setDisabled(false);
        })
    }

    return (
        <View style={[mainStyle.mainContainer, styles.container]}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
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
                loading={loading}
                disabled={disabled}
                style={[mainStyle.button, { width: 150 }]}
                contentStyle={{ padding: 8 }}
                labelStyle={mainStyle.buttonLabel}
                onPress={onSubmit}>
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