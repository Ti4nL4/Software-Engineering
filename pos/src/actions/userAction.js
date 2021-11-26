import axios from "axios";
export const registerUser = (name, email, password, address, phone) => async (dispatch) => {
    try {
        dispatch({ type: "REGISTER_REQUEST"})
        const { data } = await axios.post("http://localhost:3001/api/register",
        { email, name, phone, address, password })
        dispatch({ type: "REGISTER_SUCCESS", payload: data})
    }
    catch(error) {
        dispatch({ type: "REGISTER_FAIL" , payload: error.response.data.message})
    }
}

export const deleteErrors = () => async (dispatch) => {
    dispatch({ type: "NO_ERRORS" });
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST"})
        const { data } = await axios.post("http://localhost:3001/api/login",
        { email, password })
        dispatch({ type: "LOGIN_SUCCESS", payload: data})
    }
    catch(error) {
        dispatch({ type: "LOGIN_FAIL" , payload: error.response.data.message})
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: "FORGOT_REQUEST"})
        const { data } = await axios.post("http://localhost:3001/api/forgot",
        { email })
        dispatch({ type: "FORGOT_SUCCESS", payload: data.message})
    }
    catch(error) {
        dispatch({ type: "FORGOT_FAIL", payload: error.response.data.message})
    }
}

export const resetPassword = (token) => async (dispatch) => {
    try {
        dispatch({ type: "RESET_REQUEST"})
        const { data } = await axios.get(`http://localhost:3001/api/reset/${token}`)
        dispatch({ type: "RESET_SUCCESS", payload: data.message})
    }
    catch(error) {
        dispatch({ type: "RESET_FAIL", payload: error.response.data.message})
    }
}

export const updatePasswordToken = (token, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: "RESET_PASSWORD_REQUEST"})
        const { data } = await axios.put(`http://localhost:3001/api/reset/password/${token}`,
        {token, newPassword})
        dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: data.message})
    }
    catch(error) {
        dispatch({ type: "RESET_PASSWORD_FAIL", payload: error.response.data.message})
    }
}