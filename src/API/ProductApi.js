import { baseService } from "./ApiConfig";

export class ProductApi extends baseService {
    //brand LOGO
    fetchBrandLogoApi = ()=>{
        return this.get(`brand`)
    }
    //brand LOGO end

    fetchAllFemaleProduct = () => {
        return this.get(`product?type=nu&brand=6`)
    }
    fetchAllMaleProduct = () => {
        return this.get(`product?type=nam&brand=6`)
    }
    fetchDetailProductApi = (id) => {
        return this.get(`product/${id}`)
    }
    fetchRandomProductApi =()=>{
        return this.get(`product/getrandom?size=3`)
    }
    fetchNewsAPI = () => {
        return this.get(`posts`)
    }
}

export const QLProductApi = new ProductApi()