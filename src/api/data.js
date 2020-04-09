import axios from './axios.config'

export const demoData = () => {
    return axios.request({
        url: "/UserSave",
        method: 'post',
        data: {
            userId: 123123,
            name: 'breeze-howl',
        }
    })
};