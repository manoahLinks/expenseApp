import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskBar from './components/TaskBar';
import Homepage from './pages/FirstPage';
import ProfilePage from './pages/ProfilePage';
import Transactions from './components/Transactions';
import ExpenseForm from './components/ExpenseForm';
import Checkout from './components/Checkout';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import AttendancePage from './pages/AttendacePage';
import SignupPage from './pages/SignupPage';
import { useAuthContext } from './hooks/useAuthContext';
import AnalyticsPage from './pages/AnalyticsPage';
import MyProfile from './pages/subpages/MyProfile';
import SalesPage from './pages/subpages/SalesPage';
import RawMaterials from './pages/subpages/RawMaterials';
import Marketing from './pages/subpages/Marketing';
import Finance from './pages/subpages/Finance';
import RawMaterialAnalytics from './pages/AnalysisPages/RawMaterialAnalytics';
import Products from './pages/subpages/Products';
import RawmaterialForm from './pages/rawmaterialpages/RawmaterialForm';
import ProductsForm from './pages/productPages/ProductsForm';
import RawmaterialList from './pages/rawmaterialpages/RawmaterialList';
import ProductList from './pages/productPages/ProductList';
import CustomerForm from './pages/marketing/CustomerForm';
import CustomerList from './pages/marketing/CustomerList';


function App() {

  const {user} = useAuthContext()

  return (
    <Router>
      <div className="flex flex-col h-screen text-gray-500 text-xs md:text-sm">
        <NavBar/>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-3/12 border-r grid grid-cols-1 hidden md:block'>
            <div className='flex flex-col p-5 items-center border-b'>
              <img src={require(`./assets/ole.jpg`)} className='w-32 h-32 rounded-full' alt="" />
              <button className='p-1 bg-gray-100 rounded'>Edit profile</button>
            </div>
            <div className='border-b p-5 flex flex-col items-center'>      
              <div className='flex gap-x-2 items-center bg-gray-100 py-1 px-2'>
                  <div className='flex p-1 bg-white rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 animate-spin">
                      <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                    </svg>
                  </div>
                  <h4>Staff Appriasal</h4>
              </div>
              <div className='flex'>
                
              </div>
            </div>
          </div>
          <div className='flex flex-col md:w-6/12 justify-center md:p-5 p-2 border-r'>
            <Routes>
              <Route exact path={`/`}     element={!user ? <LoginPage /> : <Navigate to={`/home`}/>} />
              <Route path={`/welcome`}       element={user ? <WelcomePage/> : <Navigate to={`/`}/>} />
              <Route path={`/home`}         element={user ? <Homepage /> : <Navigate to={`/`}/>} />
              <Route path={`/profile`}      element={user ? <ProfilePage /> : <Navigate to={`/`}/>} />
              <Route path={`/cards`}        element={user ? <Checkout /> : <Navigate to={`/`}/>} />
              <Route path={`/signup`}       element={!user ? <SignupPage /> : <Navigate to={`/`}/>} />
              <Route path={`/myprofile/attendance`}   element={user ? <AttendancePage /> : <Navigate to={`/`}/>} />
              <Route path={`/analytics`}    element={user ? <AnalyticsPage /> : <Navigate to={`/`}/>} />
              <Route path={`/myprofile`}    element={user ? <MyProfile /> : <Navigate to={`/`}/>} />
              <Route path={`/sales`}        element={user ? <SalesPage/> : <Navigate to={`/`}/>} />
              <Route path={`/rawmaterials`}        element={user ? <RawMaterials/> : <Navigate to={`/`}/>} />
              <Route path={`/marketing`}        element={user ? <Marketing/> : <Navigate to={`/`}/>} />
              <Route path={`/marketing/registercustomer`}        element={user ? <CustomerForm/> : <Navigate to={`/`}/>} />
              <Route path={`/marketing/mycustomers`}        element={user ? <CustomerList/> : <Navigate to={`/`}/>} />
              <Route path={`/finance`}        element={user ? <Finance/> : <Navigate to={`/`}/>} />
              <Route path={`/finance/transactions`} element={user ? <Transactions /> : <Navigate to={`/`}/>} />
              <Route path={`/finance/expense/new`} element={user ? <ExpenseForm/>: <Navigate to={`/`}/>}/>
              <Route path={`/rmanalytics`}        element={user ? <RawMaterialAnalytics/> : <Navigate to={`/`}/>} />
              <Route path={`/products`}        element={user ? <Products/> : <Navigate to={`/`}/>} />
              <Route path={`/rawmaterials/new`}        element={user ? <RawmaterialForm/> : <Navigate to={`/`}/>} />
              <Route path={`/rawmaterials/list`}        element={user ? <RawmaterialList/> : <Navigate to={`/`}/>} />
              <Route path={`/products/new`}        element={user ? <ProductsForm/> : <Navigate to={`/`}/>} />
              <Route path={`/products/list`}        element={user ? <ProductList/> : <Navigate to={`/`}/>} />
            </Routes>
            {/* {user && <TaskBar />} */}
          </div>
          <div className='md:w-3/12'></div>
        </div>
        
      </div>
    </Router>    
  );

}

export default App;
