import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskBar from './components/TaskBar';
import Homepage from './pages/FirstPage';
import Sidebar from './components/Sidebar';
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
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DailyActivityReportSheet from './pages/DailyActivityReportSheet';
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
      <div className="flex flex-col min-h-screen relative text-gray-500 text-xs md:text-sm">
        <NavBar />
        <div className='flex flex-col md:flex-row my-12 w-full'>
          <Sidebar />
          <div className='grid grid-cols-1 md:w-10/12 md:ml-auto scroll-smooth  md:grid-cols-3'>
            <div className='grid grid-cols-1 md:col-span-2 border-r'>
              <Routes>
                <Route exact path={`/`}     element={!user ? <LoginPage /> : <Navigate to={`/home`}/>} />
                <Route path={`/welcome`}       element={user ? <WelcomePage/> : <Navigate to={`/`}/>} />
                <Route path={`/home`}         element={user ? <Homepage /> : <Navigate to={`/`}/>} />
                <Route path={`/profile`}      element={user ? <ProfilePage /> : <Navigate to={`/`}/>} />
                <Route path={`/dbar`}        element={user ? <DailyActivityReportSheet /> : <Navigate to={`/`}/>} />
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
            </div>
            
            <div className='grid grid-cols-1 gap-y-2 '>
              <div className='grid grid-cols-1 h-48'>
                <BarChart />
              </div>
              <div className='grid grid-cols-1 h-48'>
                
              </div>
              <div></div> 
            </div>
          </div>
        </div>
      </div>
    </Router>    
  );

}

export default App;
