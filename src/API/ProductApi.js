import { baseService } from "./ApiConfig";

export class ProductApi extends baseService {
    //brand LOGO
    fetchBrandLogoApi = ()=>{
        return this.get(`brand`)
    }
    //brand LOGO end

    fetchHomeProduct = (type) => {
        return this.get(`product?type=${type}&brand=6`)
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
    NewsDetailApi = (id)=>{
        return this.get(`post/${id}`)
    }
    CategoryApi=(type,brand)=>{
        return this.get(`product?${type}brand=${brand}`)
    }
}

export const QLProductApi = new ProductApi()