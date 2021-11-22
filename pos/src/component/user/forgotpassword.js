import React, { useState, useEffect } from 'react'
import './login.css'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from "react-redux";
import { deleteErrors, forgotPassword, resetPassword } from "../../actions/userAction";
import './forgotpassword.css'
import { Link, useNavigate } from "react-router-dom";

export function ForgotPassword() {
    const navigate = useNavigate()
    const validationForm = Yup.object().shape({
        email: Yup.string()
          .required('Please enter email')
          .email('Email is invalid'),
    })

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationForm)  
    })
    const [emailReset, setEmailReset] = useState()
    
    const [code, setCode] = useState(0)
    const emailResetChange = (event) => {
        if(showError) {
            setShowError(null)
        }
        setEmailReset(event.target.value)
    }

    const codeChange = (event) => {
        if(showError) {
            setShowError(null)
        }
        setCode(event.target.value)
    }

    const forgotRequest = () => {
        dispatch(forgotPassword(emailReset))
    }
    
    const tokenRequest = (event) => {
        event.preventDefault()
        dispatch(resetPassword(code))
    }
    
    const { error, message,  } = useSelector((state) => state.forgotPassword)
    const [showError, setShowError] = useState(error)
    useEffect(() => {
        if(error) {
            setShowError(error)
            dispatch(deleteErrors())
        }
        if(message === 'success_token_verify') {
            navigate(`/reset/${code}`)
        }
    }, [dispatch, error, message, code, navigate])

    return (
     <div className="row signup-background">
        <div className="col imagess">
            <img className="image_lefts" src="Saly-3.png" alt="error" />
         </div>
        <div className="col container signin-container">
            <form onSubmit={message !== 'success' ? handleSubmit(forgotRequest) : tokenRequest}>
             <div className="row signup-content">
                <div className="text-center title_form">
                    Welcome to <span className="title2-small">restaurant POS</span>
                </div> 
                <div className="forgot-tits">Forgot password?</div>
                <div className="signup_inputs">
                {message === 'success' ? <p className="info text-center"> We have sent you an e-mail to reset your password! </p> : null }
                    <label className="form-label">{message !== 'success' ? "Enter your email address" : "Enter code"}</label>
                {message !== 'success' ? <input autoComplete="off" type="text" name="email"
                    onChange={(e) => {
                        register('email').onChange(e)
                        emailResetChange(e)
                   }}
                   ref={register('email').ref}
                    className={`form-control input-fields ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email address" /> : null }
                    {errors.email ? <div className="invalid-feedback">{errors.email?.message}</div>
                     : <div className="text-danger error-shows passwordwhy">{showError === 'User does not exist' ? showError : null}</div>}
                    {message === 'success' ?
                            <input autoComplete="off" type="text"
                            className="form-control input-fields" placeholder="Code reset"
                            onChange={codeChange}></input>
                    : null}
                    {showError === 'Reset password token is invalid!' ? 
                    <p className="text-danger passwordwhy">{showError}</p> : null }
                    <div className="col d-flex justify-content-end">
                    <Link to="/"> <button className="cancel-button">Cancel</button> </Link>
                    <button type="submit" className="continue-button">Continue</button>
                    </div> 
                </div>
             </div>
            </form>  
        </div>
         <div className="col imagess">
             <img className="image_rights" src="Saly-2.png" alt="error" />
         </div>
     </div>   
     
    )
}
