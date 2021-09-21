import axios, {AxiosInstance} from 'axios';

const AxiosHttpClient = axios.create({
    // headers: { // if apiToken is stored
    //     'Authorization': `Bearer ${}`
    // },
    baseURL: process.env.VUE_APP_API_URL,
});

export default AxiosHttpClient as AxiosInstance;
