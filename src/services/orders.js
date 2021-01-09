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

    getCustomerOrders: function (userData) {
        return axiosInstance.post('buyer/getcustomerorders', {
            customer_id: userData.id,
        }, configToken(userData.token))
    },
    getOrderDetails: function (userData) {
        return axiosInstance.post('buyer/customerorderdetail', {
            customer_id: userData.id,
            order_id: userData.order_id
        }, configToken(userData.token))
    },
    placeCustomerOrder:function(userData){
        return axiosInstance.post('buyer/placeorder',{
            name:userData.name,
            email:userData.email
        },configToken(userData.token))
    }



};

export default Api;