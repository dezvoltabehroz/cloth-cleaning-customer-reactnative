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

    getcustomerorders: function (userData) {
        return axiosInstance.post('buyer/getcustomerorders', {
            customer_id: userData.id,
        }, configToken(userData.token))
    },
    getproductsforcustomer: function () {
        return axiosInstance.get('buyer/getproductsforcustomer', config)
    },



};

export default Api;