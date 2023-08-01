import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { mainStyle } from '../../styles/styles'
import Input from '../../components/Input'
import { Button } from 'react-native-paper'
import { RootStackScreenProps } from '../../navigation/types'
import { loginPost, saveData } from '../../services/auth.service'


const LoginScreen = ({ navigation }: RootStackScreenProps<'Login'>) => {
    
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const [body, setBody] = useState({
        email: '',
        password: '',
    });

    const onChangeEmail = (text: string) => {
        setBody({...body, email: text});
    }
    const onChangePassword = (text: string) => {
        setBody({...body, password: text});
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

    const onSubmit = () => {
        setLoading(true);
        setDisabled(true);
        loginPost(body).then(res => {
            saveData(res);
            navigateHome();
        }).catch(error => {
            setLoading(false);
            setDisabled(false);
        })
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
                    secureTextEntry={true} 
                    onSubmitEditing={onSubmit}
                    />
            </View>
            <Button mode="contained-tonal"
                loading={loading}
                disabled={disabled}
                style={[mainStyle.button, { width: 150 }]}
                contentStyle={{ padding: 8 }}
                labelStyle={mainStyle.buttonLabel}
                onPress={onSubmit}>
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