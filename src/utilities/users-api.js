import sendRequest from "./sendRequest";
const baseURL = "/users/";

export async function register(formData) {
    try {
        console.log(formData)
        const newUserData = await sendRequest(`${baseURL}register/`, "POST", formData)
        localStorage.setItem("accessToken", newUserData.access)
        localStorage.setItem("refreshToken", newUserData.refresh)
        return newUserData.user
    } catch (err) {
        console.log(err)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        return null;
    }
}

export async function login(formData) {
    try {
        const loggedInUser = await sendRequest(`${baseURL}login/`, "POST", formData)
        localStorage.setItem("accessToken", loggedInUser.access)
        localStorage.setItem("refreshToken", loggedInUser.refresh)
        return loggedInUser.user
    } catch (err) {
        console.log(err)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        return null
    }
}


export async function getUser() {
    try {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const response = await sendRequest(`${baseURL}token/refresh/`)
            localStorage.setItem('accessToken', response.access);
            return response.user
        }
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}


export function logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
}