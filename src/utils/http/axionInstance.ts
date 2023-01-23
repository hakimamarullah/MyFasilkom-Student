import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const BASE_URL = 'http://10.0.2.2:8080/api/v1';
const getToken = async () => {
  try {
    const token = await EncryptedStorage.getItem('token');
    return token;
  } catch (err) {
    return null;
  }
};
export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {Authorization: `Bearer ${getToken()}`},
});

export const AxiosPublic = axios.create({
  baseURL: BASE_URL,
});
