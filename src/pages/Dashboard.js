import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import Sidebar from '../components/Sidebar';
import WithError from '../components/WithError';
// import MainDashboard from '../components/MainDashboard';


const MainDashboard = React.lazy(() => import('../components/MainDashboard'));


function Dashboard() {

  
  return (
    <>
      <Sidebar/>
        <Suspense fallback={"Ui is loading please wait "}>
          <MainDashboard />
        </Suspense>
    </>
  )
}

export default WithError(Dashboard)