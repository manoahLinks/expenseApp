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
      <div className="flex flex-col relative h-screen text-gray-500 text-xs md:text-sm">
        <NavBar/>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div></div>
          <div className='flex flex-col justify-center overflow-scroll'>
            <Routes>
              <Route exact path={`/`}     element={!user ? <LoginPage /> : <Navigate to={`/home`}/>} />
              <Route path={`/welcome`}       element={user ? <WelcomePage/> : <Navigate to={`/`}/>} />
              <Route path={`/home`}         element={user ? <Homepage /> : <Navigate to={`/`}/>} />
              <Route path={`/profile`}      element={user ? <ProfilePage /> : <Navigate to={`/`}/>} />
              <Route path={`/transactions`} element={user ? <Transactions /> : <Navigate to={`/`}/>} />
              <Route path={`/new`}          element={user ? <ExpenseForm /> : <Navigate to={`/`}/>} />
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
              <Route path={`/rmanalytics`}        element={user ? <RawMaterialAnalytics/> : <Navigate to={`/`}/>} />
              <Route path={`/products`}        element={user ? <Products/> : <Navigate to={`/`}/>} />
              <Route path={`/rawmaterials/new`}        element={user ? <RawmaterialForm/> : <Navigate to={`/`}/>} />
              <Route path={`/rawmaterials/list`}        element={user ? <RawmaterialList/> : <Navigate to={`/`}/>} />
              <Route path={`/products/new`}        element={user ? <ProductsForm/> : <Navigate to={`/`}/>} />
              <Route path={`/products/list`}        element={user ? <ProductList/> : <Navigate to={`/`}/>} />
            </Routes>
            {user && <TaskBar />}
          </div>
          <div></div>
        </div>
        
      </div>
    </Router>    
  );

}

export default App;
