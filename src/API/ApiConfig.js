
import Axios from 'axios';

export class baseService {

    get = (url) => {
        return Axios({
            url: `${BASE_URL}/${url}`,
            method: 'GET',
        })
    }


}

export const BASE_URL = 'https://radiant-stream-23882.herokuapp.com/api/v1';
export const IMG_URL_BRAND = 'https://radiant-stream-23882.herokuapp.com/img/brand';
export const IMG_URL_PRODUCT = 'https://radiant-stream-23882.herokuapp.com/img/product';
