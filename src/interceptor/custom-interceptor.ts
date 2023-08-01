import axios from 'axios'
import * as RootNavigation from '../../RootNavigation'
import { ToastAndroid } from 'react-native';
import { clearData, getRefreshToken, getToken, refreshToken, saveData } from '../services/auth.service';
import { BASE_URL } from '../common/base';

const instance = axios.create();

instance.interceptors.request.use(async function (config) {

    if(config.url !== `${BASE_URL}/auth/authenticate`) {
        const token = await getToken()
        config.headers.authorization = `Bearer ${token}`
    }

    if(config.url === `${BASE_URL}/auth/refresh-token`) {
        const refreshToken = await getRefreshToken()
        config.headers.authorization = `Bearer ${refreshToken}`
    }


    return config;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    if (response.data.message) {
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
    }
    return response;
}, async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;
        try {
            await refreshToken().then(res => {
                clearData();
                saveData(res);
            })
            return instance(config);
        } catch (_error) {
            RootNavigation.navigate('Login', {});
            return Promise.reject(_error);
        }
    }
    if (error?.response?.status === 403) {
        ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
        RootNavigation.navigate('Login', {});
        return Promise.reject(error);
    }
});

export default instance