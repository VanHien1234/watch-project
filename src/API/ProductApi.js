import { baseService } from "./ApiConfig";

export class ProductApi extends baseService {
    fecthAllFemaleProduct =()=>{
        return this.get(`product?type=nu&brand=6`)
    }
    fecthAllMaleProduct =()=>{
        return this.get(`product?type=nam&brand=6`)
    }
    fetchDetailProductApi =(id)=>{
        return this.get(`product/${id}`)
    }
}

export const QLProductApi = new ProductApi()