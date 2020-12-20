import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './Interceptor';

const Api = {
    myInvitations: function (token) {
        return axiosInstance.get(`my_invitations?token=${token}`)
    },


};

export default Api;