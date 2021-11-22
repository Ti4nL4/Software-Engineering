import React, { useState } from 'react'
import './login.css'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from "react-redux";
import { updatePasswordToken } from "../../actions/userAction";

export function ResetPassword() {
    const {token} = useParams()

    const validationForm = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')    
    });

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationForm)  
    })
    const [passwordReset, setPasswordReset] = useState()
    const [security, setSecurity] = useState(true)
    const { message_success } = useSelector((state) => state.forgotPassword)
    const passwordResetChange = (event) => {
        event.preventDefault()
        setPasswordReset(event.target.value)
    }

    const updatePassword = () => {
        dispatch(updatePasswordToken(token, passwordReset))
    }
    
    return (
        <div className="row signup-background">
            <div className="col imagess">
                <img className="image_lefts" src="/Saly-3.png" alt="error" />
            </div>
            <div className="col container signup-container">
                <form onSubmit={handleSubmit(updatePassword)}>
                    <div className="row signup-content">
                        <div className="title_form text-center">
                            Welcome to <span className="title2-small">restaurant POS</span>
                        </div> 
           <div className="title-reset">Reset password</div>
           <div className="signup_inputs">
           <label className="form-label">Enter your new password</label>
               <div className="wraper-icons">
                   <input autoComplete="off" type={security ? "password" : "text"} name="password"
                   onChange={(e) => {
                       register('password').onChange(e)
                       passwordResetChange(e)
                  }}
                  ref={register('password').ref}
                   className="form-control input-fields" placeholder="Password"/>
                   <i onClick={ () => { setSecurity( security => !security ) }} className="bi bi-eye-slash icon-pass" id="togglePassword"></i>
               </div>
                <div className="text-danger passwordwhy">{errors.password?.message}</div>
           </div>
           <div className="col-12 signup_inputs">
               <label className="form-label">Reenter your password</label>
               <div className="wraper-icons">
                   <input autoComplete="off" type={security ? "password" : "text"} name="confirmPassword"
                   onChange={(e) => {
                       register('confirmPassword').onChange(e)
                  }}
                  ref={register('confirmPassword').ref}
                   className="form-control input-fields" placeholder="Confirm password"/>
                   <i onClick={ () => { setSecurity( security => !security ) }} className="bi bi-eye-slash icon-pass" id="togglePassword"></i>
               </div>
                <div className="text-danger passwordwhy">{errors.confirmPassword?.message}</div>
           </div>
           <div className="col-12">
               <button type="submit" className="button-sign-in">Confirm</button>
           </div>
           {message_success?
            <div >
                <p className="sign-success text-center">Reset password successfully!</p>
                <div className="text-end">
                    <Link to="/" className="forgotq">Login now?</Link>
                </div>
            </div> : null }
        </div> 
    </form>
            </div>
            <div className="col imagess">
                <img className="image_rights" src="/Saly-2.png" alt="error" />
            </div>
        </div>  
    )
}
