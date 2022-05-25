import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import Profile from './Pages/Dashboard/Profile';
import Users from './Pages/Dashboard/Users';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Title from './Pages/Home/Title/Title';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Title></Title>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/my' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>} />

        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
