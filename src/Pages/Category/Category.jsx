import React from 'react'
import CategoryRender from './CategoryRender';
import { useSelector } from 'react-redux'
import {
  Route, Switch, useRouteMatch
} from "react-router-dom";
import Loading from 'LoadingCpn/Loading';


export default function Category() {
  let { path } = useRouteMatch();
  const { isLoading } = useSelector(state => state.LoadingReducer);

  /* ALL BRAND */
  const Casio = { type: '', brand: 'casio', title: 'CASIO' }
  const Orient = { type: '', brand: 'orient', title: 'ORIENT' }
  const Citizen = { type: '', brand: 'citizen', title: 'CITIZEN' }
  const Seiko = { type: '', brand: 'Seiko', title: 'SEIKO' }
  const Sunrise = { type: '', brand: 'Sunrise', title: 'SUNRISE' }
  /* ALL BRAND END */

  return (
    <>
      {/* { !isLoading? */}
      <div className='container'>
        <div className="row">
        <Loading />
          <Switch>
          
            <Route path="/category/casio">
            
              <CategoryRender urlTitle={Casio} />
            </Route>
            <Route path={`${path}/orient`}>
              <CategoryRender urlTitle={Orient} />
            </Route>
            <Route path={`${path}/citizen`}>
              <CategoryRender urlTitle={Citizen} />
            </Route>
            <Route path={`${path}/seiko`}>
              <CategoryRender urlTitle={Seiko} />
            </Route>
            <Route path={`${path}/sunrise`}>
              <CategoryRender urlTitle={Sunrise} />
            </Route>
            {/* <Route path ={path}>
                    <CategoryRender urlTitle={Casio}/>
                </Route> */}


          </Switch>
        </div>
      </div>
      {/* : ''} */}
    </>


  )
}
