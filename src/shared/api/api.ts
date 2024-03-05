import axios from 'axios';
import { USER_LOACALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: `Barear ${localStorage.getItem(USER_LOACALSTORAGE_KEY)}`,
    },
});
