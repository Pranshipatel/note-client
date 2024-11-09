import { toast } from "react-toastify";
import axios  from "../../utils/axios";
import { setUser } from "../reducers/userSlice";

export const getUser = ()=>async(dispatch)=>{
  try {
    const { data } = await axios.get("/", { withCredentials: true });    
    console.log(data)
    dispatch(setUser(data.user))
  } catch (error) {
    console.log(error)
  }
}

export const registerUser = (data, navigate)=>async(dispatch)=>{
try {
    const response = await axios.post('/auth/register', data);
    dispatch(setUser(response.data.user));
    navigate("/login")
    toast.success("Welcome to notily")
} catch (error) {
    console.log(error.message)
    toast.error(error.response?.data?.errors?.[0]?.message  || "Regstration failed")
}
}

export const loginUser = (data,navigate)=>async(dispatch)=>{
    try {
        const response = await axios.post('/auth/login',data);
        dispatch(setUser(response.data.user));
        navigate('/home')
        toast.success("Welcome back")

    } catch (error) {
        console.log(error.message)
        toast.error(error.response?.data?.errors?.[0]?.message  || "Regstration failed")
    }
}

