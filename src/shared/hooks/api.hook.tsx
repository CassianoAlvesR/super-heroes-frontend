//import { useToast } from "@chakra-ui/react"

import { Params, api } from "./api"

export const useApi = () => {
    return {
        get: <T,>(url: string, params?: Params) => api<T>("get", url, params)
    }
}