import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './assets/styles/style.css'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Logo from "./Components/Logo/Logo";
import Account from "./Components/User/Account";
import LeftForm from "./Components/LeftForm/LeftForm";
import AddEvent from "./Components/AddEvent/AddEvent";

// Redux
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
        <Router>
        <div className="container">
            <Navbar/>
            <Logo/>
            <Routes>
                <Route path='/events/add' element={<AddEvent/>}/>
                <Route path='/' element={<LeftForm/>}/>
                <Route path='/user/account' element={<Account/>}/>
            </Routes>
            <Footer/>
        </div>
        </Router>
        </Provider>
    );
}

export default App;
