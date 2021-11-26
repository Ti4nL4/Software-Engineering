import React, { useState, useEffect } from 'react'
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from "react-redux";
import { registerUser, deleteErrors, loginUser } from "../../actions/userAction";

export function Login() {
    const validationForm = Yup.object().shape({
        username: Yup.string()
          .required('Please enter username'),
        email: Yup.string()
          .required('Please enter email')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Please enter password')
          .min(6, 'Password must be at least 6 characters'),
        phone: Yup.string()
            .required("Please enter contact number"),
        address: Yup.string()
            .required("Please enter home address")
    })
    const validationLogin = Yup.object().shape({
        emailLogin: Yup.string()
          .required('Please enter email')
          .email('Email is invalid'),
        passwordLogin: Yup.string()
          .required('Please enter password'),
    })
    const [show, setShow] = useState();
    const [security, setSecurity] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { register: register2, handleSubmit: handleSubmit2,
        formState: { errors: errors2 }} = useForm({ resolver: yupResolver(validationLogin)
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationForm)  
    })
    
    const [userRegister, setUserRegister] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    })

    const [emailLogin, setEmailLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()

    const emailLoginChange = (event) => {
        setEmailLogin(event.target.value)
    }

    const passwordLoginChange = (event) => {
        if(showErrorLogin) {
            setShowErrorLogin(null)
        }
        setPasswordLogin(event.target.value)
    }
    const dataChange = (event) => {
        if(event.target.name === 'email') {
            if(showError) { setShowError(null) }
        }
        setUserRegister({ ...userRegister, [event.target.name]: event.target.value})
    }
    const { error, isAuthenticated, user, message} = useSelector((state) => state.user)
    const [showError, setShowError] = useState(error)
    const [showErrorLogin, setShowErrorLogin] = useState(error)

    const call_register = () => {
        dispatch(registerUser(userRegister.username, userRegister.email, 
            userRegister.password, userRegister.address, userRegister.phone));
    }

    const call_login = () => {
        dispatch(loginUser(emailLogin, passwordLogin));
    }
    useEffect(() => {
        if(error) {
            show ? setShowError(error) : setShowErrorLogin(error)
            dispatch(deleteErrors)
        }
        if(message === 'login_success') {
            navigate(`/success_login`)
        }
    }, [dispatch, error, show, message, navigate])
    return (
     <div className="row signup-background">
         <div className="col imagess">
             <img className="image_lefts" src="Saly-2.png" alt="error" />
         </div>
         {show ? <div className="col container signup-container">
            <form key={1} className="form-signups" onSubmit={handleSubmit(call_register)}>
             <div className="row signup-content">
                <div className="col-8 title_form">
                    Welcome to <span className="title2-small">restaurant POS</span>
                </div> 
                <div className="col sign-up-tab">
                    <p className="account_color">Have an account?</p>
                    <p onClick={() => { setShow(false) }} className="mt-0 sign-up-color">Sign in</p>
                </div>
                <div className="title_large">Sign up</div>
                <div className="signup_inputs">
                    <label className="form-label">Enter your email address</label>
                    <input  type="text" name="email"
                    onChange={(e) => {
                        register('email').onChange(e)
                        dataChange(e)
                   }}
                   ref={register('email').ref}
                    className={`form-control input-fields ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email address" />
                    {errors.email ? <div className="invalid-feedback">{errors.email?.message}</div>
                    : <div className="text-danger passwordwhy">{showError !== 'Wrong email or password!' ? showError : null}</div>}

                </div>
                <div className="col-md-6 singup_inputs">
                    <label className="form-label">User name</label>
                    <input type="text" name="username"
                    onChange={(e) => {
                         register('username').onChange(e)
                         dataChange(e)
                    }}
                    ref={register('username').ref}
                    className={`form-control input-fields ${errors.username ? "is-invalid" : ""}`}
                    placeholder="User name"/>
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
                <div className="col-md-6 phones singup_inputs">
                    <label className="form-label">Contact number</label>
                    <input type="text" name="phone"
                    onChange={(e) => {
                        register('phone').onChange(e)
                        dataChange(e)
                   }}
                   ref={register('phone').ref}
                    className={`form-control input-fields ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="Contact number" />
                    <div className="invalid-feedback">{errors.phone?.message}</div>
                </div>
                <div className="col-12 signup_inputs">
                    <label className="form-label">Enter your address</label>
                    <input autoComplete="off" type="text" name="address"
                    onChange={(e) => {
                        register('address').onChange(e)
                        dataChange(e)
                   }}
                   ref={register('address').ref}
                    className={`form-control input-fields ${errors.address ? "is-invalid" : ""}`}
                    placeholder="Home address" />
                    <div className="invalid-feedback">{errors.address?.message}</div>
                </div>
                <div className="col-12 signup_inputs">
                    <label className="form-label">Enter your password</label>
                    <div className="wraper-icons">
                        <input autoComplete="off" type={ security ? "password" : "text" } name="password"
                        onChange={(e) => {
                            register('password').onChange(e)
                            dataChange(e)
                       }}
                       ref={register('password').ref}
                        className={`form-control input-fields ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Password"/>
                        <i onClick={ () => { setSecurity( security => !security ) }} className="bi bi-eye-slash icon-pass" id="togglePassword"></i>
                    </div>
                    <div className="text-danger passwordwhy">{errors.password?.message}</div>
                </div>
                <div className="col-12">
                    <button type="submit" className="button-sign-up">Sign up</button>
                {(isAuthenticated && user) ? 
                <p className="text-center sign-success">Sign up successfully! Login now</p> : null }
                </div>
             </div>
             </form>
           </div> : null
        }
         {!show ? <div className="col container signin-container">
            <form key={2} onSubmit={handleSubmit2(call_login)}>
             <div className="row signup-content">
                <div className="col-8 title_form">
                    Welcome to <span className="title2-small">restaurant POS</span>
                </div> 
                <div className="col sign-up-tab">
                    <p className="account_color">No account?</p>
                    <p onClick={ () => { setShow(true) }} className="mt-0 sign-up-color">Sign up</p>
                </div>
                <div className="title_large">Sign in</div>
                <div className="signup_inputs">
                    <label className="form-label">Enter your email address</label>
                    <input autoComplete="off" type="text" name="emailLogin"
                    onChange={(e) => {
                        register2('emailLogin').onChange(e)
                        emailLoginChange(e)
                   }}
                   ref={register2('emailLogin').ref}
                    className={`form-control input-fields ${errors2.emailLogin ? "is-invalid" : ""}`}
                    placeholder="Email address" />
                    <div className="invalid-feedback">{errors2.emailLogin?.message}</div>
                </div>
                <div className="col-12 signup_inputs">
                    <label className="form-label">Enter your password</label>
                    <div className="wraper-icons">
                        <input autoComplete="off" type={security ? "password" : "text"} name="passwordLogin"
                        onChange={(e) => {
                            register2('passwordLogin').onChange(e)
                            passwordLoginChange(e)
                       }}
                       ref={register2('passwordLogin').ref}
                        className="form-control input-fields" placeholder="Password"/>
                        <i onClick={ () => { setSecurity( security => !security ) }} className="bi bi-eye-slash icon-pass" id="togglePassword"></i>
                    </div>
                    {errors2.passwordLogin ? <div className="text-danger passwordwhy">{errors2.passwordLogin?.message}</div>
                        : <div className="text-danger passwordwhy">{showErrorLogin !== 'Email already exists!' ? showErrorLogin : null}</div>}
                </div>
                <div className="col-12">
                    <button type="submit" className="button-sign-in">Sign in</button>
                </div>
                <div className="text-end">
                    <Link to="/forgot" className="forgotq">Forgot password?</Link>
                </div>
             </div> 
            </form>  
        </div> : null}
         <div className="col imagess">
             <img className="image_rights" src="Saly-3.png" alt="error" />
         </div>
     </div>   
    )
}
