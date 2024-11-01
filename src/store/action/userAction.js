import axios  from "../../utils/axios";
import { setUser } from "../reducers/userSlice";

export const registerUser = (data, navigate)=>async(dispatch)=>{
try {
    const response = await axios.post('/auth/register', data);
    dispatch(setUser(response.user));
    navigate("/login")
} catch (error) {
    console.log(error.message)
}
}

export const loginUser = (data,navigate)=>async(dispatch)=>{
    try {
        const response = await axios.post('/auth/login',data);
        dispatch(setUser(response.data));
        navigate('/home')
    } catch (error) {
        console.log(error.message)
    }
}