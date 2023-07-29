import axios from 'axios'
import { ToastAndroid } from 'react-native';

const instance = axios.create();

instance.interceptors.request.use(async function (config) {

    return config;

}, function (error) {

    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {

    return response;

}, function (error) {
    ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
    if (error.response.status === 401) {
        // console.log("Response Error")
    }
    return Promise.reject(error);
});

export default instance