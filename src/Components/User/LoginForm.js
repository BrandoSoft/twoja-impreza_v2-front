import React, { useState } from 'react';
import { FaKey, FaUser } from "react-icons/fa";
import './Account.scss';
import axios from "axios";

const LoginForm = () => {

    const api = process.env.REACT_APP_API

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = loginData;

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const userData = {
                email, password
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(userData)
            const res = await axios.post(`${api}/api/auth`, body, config);

            console.log(res)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="login">
            <p className="login__info">Zaloguj się</p>
            <form className="login__form" onSubmit={e => onSubmit(e)}>
                <label htmlFor="login" className="login__label"> Podaj adres e-mail</label>
                <div className="login__group">
                    <i className="fa-custom"><FaUser/></i>
                    <input placeholder="E-mail"
                           type="text"
                           name="email"
                           className="login__login"
                           value={email}
                           onChange={e => {
                               onChange(e)
                           }}
                    />
                </div>


                <label htmlFor="password" className="login__label"> Podaj Hasło</label>
                <div className="login__group">
                    <i className="fa-custom"><FaKey/></i>
                    <input placeholder="Password"
                           type="password"
                           name="password"
                           className="login__password"
                           value={password}
                           onChange={e => {
                               onChange(e)
                           }}
                    />
                </div>


                <button className="form-home__submit" type="submit">Zaloguj</button>
            </form>
        </div>
    );
};

export default LoginForm;