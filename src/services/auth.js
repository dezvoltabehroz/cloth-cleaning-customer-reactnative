import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './Interceptor';

const Api = {
    userLogin: function (userData) {
        return axiosInstance.get(`login_freelancer?email=${userData.email}&password=${userData.password}`)
    },
    getCodeForResetPass: function (email) {
        return axiosInstance.get(`forgot_password?email=${email}`)
    },
    updatePassword: function (token, password) {
        return axiosInstance.get(`new_password?token=${token}&password=${password}`)
    },
};

export default Api;