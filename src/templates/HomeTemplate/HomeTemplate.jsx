import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';


export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;
    const { isLoading } = useSelector(state => state.LoadingReducer);

    return <Route {...restProps} render={(propsRoute) => {

        return <Fragment>
            
            
                <Header />
                <div className="body--cpn" style={{ marginTop: '150px' }}>
                    <Component {...propsRoute} />

                </div>



                <Footer />
            




        </Fragment>

    }} />
}
