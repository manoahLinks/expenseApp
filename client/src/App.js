import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/FirstPage';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { useAuthContext } from './hooks/useAuthContext';
import AnalyticsPage from './pages/AnalyticsPage';
import MyProfile from './pages/subpages/MyProfile';
import SalesPage from './pages/subpages/SalesPage';
import RawMaterials from './pages/subpages/RawMaterials';
import Marketing from './pages/subpages/Marketing';
import PieChart from './components/PieChart';
import DailyActivityReportSheet from './pages/DailyActivityReportSheet';
import Finance from './pages/subpages/Finance';
import Products from './pages/subpages/Products';
import Forgotpassword from './pages/Forgotpassword';


function App () {

  const {user} = useAuthContext()

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative text-slate-500 text-xs md:text-sm">
        <NavBar />
        <div className='flex flex-col md:flex-row my-12 w-full'>
          {user && <Sidebar />}
          <div className='grid grid-cols-1 md:w-10/12 md:ml-auto scroll-smooth  md:grid-cols-3'>
            <div className={`grid grid-cols-1 md:col-span-2 ${user && `` }`}>
              <Routes>
                <Route exact path={`/`}     element={!user ? <LoginPage /> : <Navigate to={`/home`}/>} />
                <Route path={`/forgotpassword`}     element={!user ? <Forgotpassword /> : <Navigate to={`/home`}/>} />
                <Route path={`/home`}         element={user ? <Homepage /> : <Navigate to={`/`}/>} />
                <Route path={`/dbar`}        element={user ? <DailyActivityReportSheet /> : <Navigate to={`/`}/>} />
                <Route path={`/signup`}       element={!user ? <SignupPage /> : <Navigate to={`/`}/>} />
                <Route path={`/analytics`}    element={user ? <AnalyticsPage /> : <Navigate to={`/`}/>} />
                <Route path={`/myprofile`}    element={user ? <MyProfile /> : <Navigate to={`/`}/>} />
                <Route path={`/sales`}        element={user ? <SalesPage/> : <Navigate to={`/`}/>} />
                <Route path={`/rawmaterial`}        element={user ? <RawMaterials/> : <Navigate to={`/`}/>} />
                <Route path={`/marketing`}        element={user ? <Marketing/> : <Navigate to={`/`}/>} />
                <Route path={`/finance`}        element={user ? <Finance/> : <Navigate to={`/`}/>} />
                <Route path={`/product`}        element={user ? <Products/> : <Navigate to={`/`}/>} />
              </Routes>
            </div>
            
            {user && <div className='grid grid-cols-1 gap-y-2 h-full '>
              <div className='grid grid-cols-1 m-4 p-4'>
                <PieChart/>
              </div>
              <div className='grid grid-cols-1'>
                
              </div>
              <div></div> 
            </div>}
          </div>
        </div>
      </div>
    </Router>    
  );

}

export default App;
