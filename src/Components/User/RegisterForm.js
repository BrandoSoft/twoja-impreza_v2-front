import React, { useState } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FaAt, FaKey, FaUser } from "react-icons/fa";
import './Account.scss';
import { setAlert } from "../../actions/alert";
import Alert from "../Alert/Alert";

const RegisterForm = (props) => {
    const api = process.env.REACT_APP_API

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = registerData;

    const onChange = e => setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            props.setAlert(' Hasła nie pasują do siebie', 'danger')
        } else {
            const newUser = {
                name, email, password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newUser)

                const res = await axios.post(`${api}/api/users`, body, config);
                console.log(res)

            } catch (err) {
                console.log(err.message)
            }
        }
    }

    return (
        <div className="register">
            <p className="register__info">Nie masz konta? Zarejestruj się</p>
            <form className="register__form" onSubmit={e => onSubmit(e)}>
                <label htmlFor="login" className="register__label"> Podaj nazwę użytkownika/login</label>
                <div className="register__group">
                    <i className="fa-custom"><FaUser/></i>
                    <input placeholder="Login"
                           type="text"
                           name="name"
                           className="register__login"
                           value={name}
                           onChange={e => {
                               onChange(e)
                           }}
                    />
                </div>
                <label htmlFor="email" className="register__label"> Podaj email</label>
                <div className="register__group">
                    <i className="fa-custom"><FaAt/></i>
                    <input placeholder="Email"
                           type="email"
                           name="email"
                           className="register__email"
                           value={email}
                           onChange={e => {
                               onChange(e)
                           }}
                    />
                </div>
                <label htmlFor="password" className="register__label"> Podaj Hasło</label>
                <div className="register__group">
                    <i className="fa-custom"><FaKey/></i>
                    <input placeholder="Hasło"
                           type="password"
                           name="password"
                           className="register__password"
                           value={password}
                           onChange={e => {
                               onChange(e)
                           }}
                    />
                </div>
                <label htmlFor="password2" className="register__label"> Powtórz Hasło</label>
                <div className="register__group">
                    <i className="fa-custom"><FaKey/></i>
                    <input placeholder="Potwierdź hasło"
                           type="password"
                           name="password2"
                           className="register__password"
                           value={password2}
                           onChange={e => {
                               onChange(e)
                           }}
                    />
                </div>
                <Alert/>
                <button className="form-home__submit" type="submit">Zarejestruj</button>
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(RegisterForm);