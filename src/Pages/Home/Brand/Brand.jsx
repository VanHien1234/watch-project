import React,{useEffect,useState} from 'react';
import { IMG_URL_BRAND } from 'API/ApiConfig';


const Brand = (props) => {
    const {arrLogo} = props


    const renderBrand = ()=>{
        return arrLogo?.map((e,index)=>{
            return <div className='col' key={index}>
                <img src={`${IMG_URL_BRAND}/${e.logo}`} alt="" />
            </div>
        })
    }


    return (
        <div className='Brand px-3 text-center' >
            <h3>Brand</h3>
            <div className="row ">
                {renderBrand()}
            </div>

        </div>
    );
}

export default Brand;
