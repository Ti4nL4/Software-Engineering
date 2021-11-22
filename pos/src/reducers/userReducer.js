export const loginReducer = (state = {user: {}}, action) => {
    switch(action.type) {
        case "LOGIN_REQUEST":
        case "REGISTER_REQUEST":
            return {
                loading: true,
                isAuthenticated: false,
            };
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.user,
                message: action.payload.message
            }
            case "LOGIN_FAIL":
            case "REGISTER_FAIL":
                return {
                    ...state,
                    loading: false,
                    isAuthenticated: false,
                    user: null,
                    error: action.payload,
                };
            case "NO_ERRORS":
                    return {
                      ...state,
                      error: null,
                    };
            default:
                return state;
    }
}

export const forgotReducer = (state = {}, action) => {
    switch(action.type) {
        case "FORGOT_REQUEST":
        case "RESET_REQUEST":
        case "RESET_PASSWORD_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FORGOT_SUCCESS":
        case "RESET_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
              };
        case "RESET_PASSWORD_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                message_success: action.payload,
            };
        case "FORGOT_FAIL":
        case "RESET_FAIL":
        case "RESET_PASSWORD_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case "NO_ERRORS":
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
