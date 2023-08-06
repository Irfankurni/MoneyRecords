import { deleteApi, getApi } from "../common/api"
import { BASE_URL } from "../common/base"

export const getAnalysis = () => {
    return getApi(`${BASE_URL}/histories/analysis`)
}

export const getDataByUser = (type: string) => {
    return getApi(`${BASE_URL}/histories?type=${type}`)
}

export const deleteHistory = (id: string) => {
    return deleteApi(`${BASE_URL}/histories/${id}`)
}