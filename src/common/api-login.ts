import axios from "../interceptor/custom-interceptor-login";

async function postLogin(url: any, data: any) {
    return axios.post(url, data, { method: 'POST' })
        .then((res: { data: any; }) => res.data)
}

export { postLogin }