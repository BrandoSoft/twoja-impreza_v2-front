import React from 'react';
import HeaderBar from "../HeaderBar/HeaderBar";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Account = () => {
    return (
        <>
            <HeaderBar title={'Panel Użytkownika'}/>
            <main className="main-section">
            <LoginForm/>
            <RegisterForm/>
            </main>
        </>
    );
};

export default Account;