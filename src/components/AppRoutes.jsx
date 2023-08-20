import React from "react";
import { Form, Route, Routes} from 'react-router-dom'
import HomePage from "./HomePage";
import BookList from "./BookList";
import About from "./About";
// import { AuthContext } from "../context/authContext";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import BooksPage from "./Pages/User/Books/BooksPage";
import UserProfile from "./Pages/User/UserProfile/UserProfile";
import { AddBook } from "./Pages/User/Books/AddBook";
import { UpdateBook } from "./Pages/User/Books/UpdateBook";
import UserInfo from "./Pages/User/UserInfo";
import EditUser from "./Pages/User/EditUser";
import CategoryInfo from "./Pages/User/Category/CategoryInfo";
import AddCategory from "./Pages/User/Category/AddCategory";
import EditCategory from "./Pages/User/Category/EditCategory";
import Cart from "./cart/cart"
import Reg from "./Registration";
// import Cookies from "js-cookie";

const AppRoutes = () => {

return(
    <>
        <Routes>
        <Route path='/' element={<Login/>}/>
            <Route path='/Registration' element={<Reg/>}/>
            <Route path='/HomePage' element={<HomePage/>}/>
            <Route exact path={'/Books'} element={<BookList/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/BooksPage' element={<BooksPage/>}/>
            <Route path='/UserInfo' element={<UserInfo/>}/>
            <Route path='/UserProfile' element={<UserProfile/>}/>
            <Route path='/AddBook' element={<AddBook/>}/>
            <Route path='/UpdateBook' element={<UpdateBook/>}/>
            <Route path='/EditUser' element={<EditUser/>}/>
            <Route path='/CategoryInfo' element={<CategoryInfo/>}/>
            <Route path='/AddCategory' element={<AddCategory/>}/>
            <Route path='/EditCategory' element={<EditCategory/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </>
    );
};

export default AppRoutes;