import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskBar from './components/TaskBar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Transactions from './components/Transactions';
import ExpenseForm from './components/ExpenseForm';
import Checkout from './components/Checkout';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import AttendancePage from './pages/AttendacePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex flex-col w-full relative h-screen text-gray-500 text-xs md:text-sm">
          <NavBar/>
          <div className='flex flex-col md:flex-row w-full overflow-scroll'>
            <Routes>
              <Route exact path={`/`} element={<WelcomePage></WelcomePage>}></Route>
              <Route path={`/login`} element={<LoginPage></LoginPage>}></Route>
              <Route path={`/home`} element={<HomePage></HomePage>}></Route>
              <Route path={`/profile`} element={<ProfilePage></ProfilePage>}></Route>
              <Route path={`/transactions`} element={<Transactions></Transactions>}></Route>
              <Route path={`/new`} element={<ExpenseForm></ExpenseForm>}></Route>
              <Route path={`/cards`} element={<Checkout></Checkout>}></Route>
              <Route path={`/attendance`} element={<AttendancePage></AttendancePage>}></Route>
            </Routes>
            <TaskBar />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
