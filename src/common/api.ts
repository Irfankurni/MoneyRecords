import axios from "../interceptor/custom-interceptor";

async function getApi(url: string) {
    return await axios.get(url).then(res => res.data)
}

async function getByIdApi(url: string, id: any) {
    return axios.get(url, id).then(res => res.data)
}

async function postApi(url: string, data: any) {
    return axios.post(url, data, { method: 'POST' })
        .then(res => res.data)
}

async function putApi(url: string, data: any) {
    return axios.put(url, data, { method: 'PUT' }).then(res => res.data)
}

async function deleteApi(url: string) {
    return axios.delete(url, { method: 'DELETE' }).then(res => res)
}

export { getApi, getByIdApi, postApi, putApi, deleteApi }