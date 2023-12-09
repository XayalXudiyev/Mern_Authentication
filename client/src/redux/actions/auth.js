//  redux/actions/auth.js


import axios from 'axios'
import { toast } from 'react-toastify'

export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/register', authData)
console.log(data)
        dispatch({ type: "REGISTER", payload: data })

        window.location = '/'
    } catch (error) {

        console.log(error)
        toast(error.response.data.msg, {
            position: 'top-right',
            autoClose: 5000
        })

    }
}

export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/login', authData)

        dispatch({ type: "LOGIN", payload: data })

        window.location = '/'
    } catch (error) {
        console.log(first)
        toast(error.response.data.msg, {
            position: 'top-right',
            autoClose: 5000
        })


    }
}