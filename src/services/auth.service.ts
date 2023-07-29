import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../common/base';
import { postLogin } from '../common/api-login';
import { postApi } from '../common/api';

const loginPost = (body: any) => {
    return postLogin(BASE_URL + '/auth/authenticate', body)
}

const register = (body: any) => {
    return postApi(`BASE_URL${'/register'}`, body)
}

const saveData = async (data: any) => {
    try {
        const jsonData = JSON.stringify(data)
        await AsyncStorage.setItem('data', jsonData)
    } catch (error) {
        console.log(error)
    }
}

const getData = async () => {
    const data = await AsyncStorage.getItem('data')
    if (data) {
        return JSON.parse(data)
    }
    return null
}

const getToken = () => {
    return getData().then(res => res.accessToken)
}

const getId = () => {
    return getData().then(res => res.id)
}

export { loginPost, register, saveData, getData, getToken, getId }