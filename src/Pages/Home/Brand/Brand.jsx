import React,{useEffect,useState} from 'react';
import { IMG_URL_BRAND } from 'API/ApiConfig';
import axios from 'axios'

const Brand = () => {
    const [brands,setBrands] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                let result = await axios.get("https://radiant-stream-23882.herokuapp.com/api/v1/brand")
                console.log('result', result.data.data)
                setBrands(result.data.data)
            }
            catch(error){
                console.log('error',error)
            }
        }
        fetchData()
    }, []);

    const renderBrand = ()=>{
        return brands.map((e,index)=>{
            return <div className='col' key={index}>
                <img src={`${IMG_URL_BRAND}/${e.logo}`} alt="" />
            </div>
        })
    }


    return (
        <div className='Brand px-3 text-center' >
            <div className="head-title">
                <span>THƯƠNG HIỆU</span>
            </div>
            <div className="row ">
                {renderBrand()}
            </div>

        </div>
    );
}

export default Brand;
