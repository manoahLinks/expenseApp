import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/FirstPage';
import HomePage from './pages/Homepage';
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
import TaskBar from './components/TaskBar';
import Suppliers from './pages/subpages/Suppliers';
import Orders from './pages/subpages/Expenditures';
import Supplies from './pages/subpages/Supplies';


function App () {

  const {user} = useAuthContext()

  return (
    <Router>
      <div className="flex Nunito flex-col min-h-screen relative text-xs  md:text-sm">
        {user && <NavBar />}
        <div className={`flex flex-col md:flex-row ${ user && `md:mt-20 mt-10`} w-full`}>
          {user && <Sidebar />}
          <div className={`grid grid-cols-1  ${user && `md:w-10/12 ml-auto`} w-full  h-auto scroll-smooth `}>
            <div className={`grid grid-cols-1 h-full  ${user && `` }`}>
              <Routes>
                <Route exact path={`/`}     element={!user ? <LoginPage /> : <Navigate to={`/dashboard`}/>} />
                <Route path={`/forgotpassword`}     element={!user ? <Forgotpassword /> : <Navigate to={`/dashboard`}/>} />
                <Route path={`/dashboard`}         element={user ? <Homepage /> : <Navigate to={`/`}/>} />
                <Route path={`/home`}         element={user ? <HomePage /> : <Navigate to={`/`}/>} />
                <Route path={`/dbar`}        element={user ? <DailyActivityReportSheet /> : <Navigate to={`/`}/>} />
                <Route path={`/signup`}       element={!user ? <SignupPage /> : <Navigate to={`/`}/>} />
                <Route path={`/analytics`}    element={user ? <AnalyticsPage /> : <Navigate to={`/`}/>} />
                <Route path={`/myprofile`}    element={user ? <MyProfile /> : <Navigate to={`/`}/>} />
                <Route path={`/sales`}        element={user ? <SalesPage/> : <Navigate to={`/`}/>} />
                <Route path={`/rawmaterial`}        element={user ? <RawMaterials/> : <Navigate to={`/`}/>} />
                <Route path={`/marketing`}        element={user ? <Marketing/> : <Navigate to={`/`}/>} />
                <Route path={`/finance`}        element={user ? <Finance/> : <Navigate to={`/`}/>} />
                <Route path={`/product`}        element={user ? <Products/> : <Navigate to={`/`}/>} />
                <Route path={`/supplier`}        element={user ? <Suppliers/> : <Navigate to={`/`}/>} />
                <Route path={`/order`}        element={user ? <Orders/> : <Navigate to={`/`}/>} />
                <Route path={`/supplies`}        element={user ? <Supplies/> : <Navigate to={`/`}/>} />
              </Routes>

              
            </div>
            {/* {user && <TaskBar/>} */}
            
          </div>
        </div>
      </div>
    </Router>    
  );

}

export default App;
