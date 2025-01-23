import { ElMessage } from 'element-ui'
import { axiosInstall } from 'g-axios'

const configMethods = {
    baseURL: 'http://mainframe-api.qa.gpyh.com/',
    token: import.meta.env.VITE_TOKEN,
    request: () => { }
}

const reslove = (res) => {
    const { resultCode } = res.data
    // if (resultCode !== "0") {
    //     return Promise.reject(new Error())
    // }
    return res
}

export default axiosInstall(configMethods, reslove)