import { baseService } from "./ApiConfig";

export class ProductApi extends baseService {
    fetchAllFemaleProduct = () => {
        return this.get(`product?type=nu&brand=6`)
    }
    fetchAllMaleProduct = () => {
        return this.get(`product?type=nam&brand=6`)
    }
    fetchDetailProductApi = (id) => {
        return this.get(`product/${id}`)
    }
    fetchNewsAPI = () => {
        return this.get(`posts`)
    }
}

export const QLProductApi = new ProductApi()