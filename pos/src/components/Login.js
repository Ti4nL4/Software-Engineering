import { React, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Login() {
    
    const [account, setAccount] = useState('')
    const [pw, setPw] = useState('')
    // const [check, setCheck] = useState(true)
    let check = false
    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:9001/login'
            ,
            { 
            
                account: account, password: pw, role: 'Admin'
            
            }
            )
            if (res.data == 'Accept'){
                check = true
            }
            console.log(res.data)
            console.log(account)
            console.log(pw)
            console.log(check)

        } catch (error) {
            console.log(error.message)
        }
        if (check == true) {
            return  (window.location.href= "/admin/report")
        }
        //e.preventDefault();
        // for (let userAccount of userAccountData) {
        //     if (userAccount.account == account && userAccount.password == pw) {
        //          return  (window.location.href= "/home")
                
        //     } 
        // }
        // e.preventDefault();
        // alert("Tài khoản hoặc mật khẩu không đúng")

        toast.error('Mật khẩu hoặc tài khoản không đúng', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div class=''>
            {/* <div class='row-md-3'>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                    <a class="navbar-brand" href="#">NavBar</a>
                </nav>
            </div> */}
            <div class="">
                <div class="container-md card" style={{ width: "350px", marginTop: "100px", borderRadius: "15px" }} >
                    <form>
                        <p class="display-5 my-5 fw-normal text-center">Log in</p>
                        <div class="form-floating mb-2">
                            <input type="account" class="form-control" id="floatingInput" placeholder="name@example.com"
                                onChange={(event) => setAccount(event.target.value)} />
                            <label for="floatingInput">Account</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="password" class="form-control" id="floatingPassword" value={pw}
                                placeholder="Password" onChange={(event) => setPw(event.target.value)} />
                            <label for="floatingPassword">Password</label>
                        </div>
                        {/* {userAccountData.} */}
                        {/* <div class="form-check mx-2 mt-3 mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div> */}
                        {/* <a class="float-start" href='#'> Quên mật khẩu </a> */}
                        <div class="d-flex justify-content-center">
                        <button class="w-50 btn btn-lg btn-success my-5" type="button" onClick={handleSubmit}>Log in</button>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    )
}