import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Loading.css'

export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer);
    console.log('loading', isLoading)


    return (
        <Fragment>
            {isLoading ?
            <div className="loaderPage">
                <div className="loader">
                    <span />
                    <span />
                    <span />
                    <h2>Loading....</h2>
                </div>
            </div>: ''
                
                

            }
        </Fragment>
    )
}