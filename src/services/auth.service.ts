import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../common/base';
import { postLogin } from '../common/api-login';
import { postApi } from '../common/api';
import axios from '../interceptor/custom-interceptor-login';

const loginPost = (body: any) => {
    return postApi(BASE_URL + '/auth/authenticate', body)
}

const register = (body: any) => {
    return postApi(`${BASE_URL}/auth/register`, body);
}

const refreshToken = async (body?: any) => {
    return postApi(`${BASE_URL}/auth/refresh-token`, body);
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

const getRefreshToken = () => {
    return getData().then(res => res.refreshToken)
}

const getId = () => {
    return getData().then(res => res.data.id)
}

const clearData = async () => {
    return await AsyncStorage.clear();
}

export { loginPost, register, refreshToken, saveData, getData, getToken, getRefreshToken, getId, clearData }