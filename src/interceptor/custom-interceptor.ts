import axios from 'axios'
import * as RootNavigation from '../../RootNavigation'
import { ToastAndroid } from 'react-native';
import { getToken } from '../services/auth.service';

const instance = axios.create();
// Add a request interceptor
instance.interceptors.request.use(async function (config) {

    const token = await getToken()
    config.headers.authorization = `Bearer ${token}`

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.message) {
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    for (const message of error.response.data.message) {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }
    if (error.response.status === 401) {
        RootNavigation.navigate('Login', {})
    }
    return Promise.reject(error);
});

export default instance