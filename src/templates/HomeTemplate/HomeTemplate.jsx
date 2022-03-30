import React from 'react'
import { Route } from 'react-router-dom';
import { Fragment } from 'react';



export const HomeTemplate =(props) =>{
    const {Component,...restProps} =props;

    return <Route {...restProps} render={(propsRoute)=>{

        return <Fragment>



            <Component {...propsRoute}/>




        </Fragment>

    }}/>
}
