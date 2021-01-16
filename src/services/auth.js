import AsyncStorage from '@react-native-community/async-storage';
import axiosInstance from './Interceptor';
let config = { headers: { 'Content-Type': 'application/json' } }
let configToken = (token) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
}
const Api = {
    userLogin: function (userData) {
        return axiosInstance.post('buyer/loginCustomer', {
            email: userData.email,
            password: userData.password
        }, config)
    },
    userSignUp: function (userData) {
        return axiosInstance.post('buyer/signup', {
            fullName: userData.full_name,
            email: userData.email,
            password: userData.password,
            password2: userData.confirmPassword,
            phone: userData.phone
        }, config)
    },
    addFcmToken: function (userData) {
        return axiosInstance.post('buyer/addfcmToken', {
            customer_id: userData.id,
            fcmToken: userData.fcmToken
        }, configToken(userData.token))
    },
    updatePassword: function (userData) {
        console.log(userData)
        return axiosInstance.put('buyer/updatepassword', {
            "id": userData.id,
            "oldPassword": `${userData.oldPassword}`,
            "password": `${userData.password}`,
            "password2": `${userData.newPassword}`
        }, configToken(userData.token))
    },
    getUserProfile: function (userData) {
        return axiosInstance.get(`buyer/customerdetails?id=${userData.user != undefined ? userData.user.id : userData.id}`)
    },
    updateUserProfile: function (userData) {
        return axiosInstance.put('buyer/updatecustomer', {
            "id": userData.id,
            "city": `${userData.city}`,
            "address": `${userData.address}`,
            "phone": `${userData.phone}`,
            "fullName": `${userData.fullName}`
        }, configToken(userData.token))
    }
};

export default Api;