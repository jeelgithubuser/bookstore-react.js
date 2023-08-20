
import './App.css';
// import HomePage from './components/HomePage';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BookList from './components/BookList';
// import About from './components/About';
// import Form from './components/Registration';
// import PageNotFound from './components/PageNotFound';
import { BrowserRouter, NavLink,} from 'react-router-dom';
import Navbar from './components/Navbar';
// import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Login from './components/Login';
// import { createContext } from 'react';
import AuthWrapper from './context/authContext';
import AppRoutes from './components/AppRoutes';


function App() {


  return (
    <>
    <ToastContainer/>
    <AuthWrapper>
    <div className='wrapper'>
      {/* {<Header/>} */}
      <Navbar/>
        <BrowserRouter>
          <div id='as'>
            <div ><NavLink to='/HomePage'></NavLink></div> 
            <div><NavLink to='/Books'></NavLink></div> 
            <div><NavLink to='/About'></NavLink></div> 
            <div><NavLink to='/Registration'></NavLink></div> 
            <div><NavLink to='/'></NavLink></div> 
            <div><NavLink to='*'></NavLink></div>
          </div>
          <AppRoutes/>
        </BrowserRouter> 
      {/* <Footer /> */}
    </div>
    </AuthWrapper>
    </>
  );
}
export default App;
