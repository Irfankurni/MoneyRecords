import { getApi } from "../common/api"
import { BASE_URL } from "../common/base"
import { getId } from "./auth.service"

export const getAnalysis = () => {
    return getApi(`${BASE_URL}/histories/analysis`)
}