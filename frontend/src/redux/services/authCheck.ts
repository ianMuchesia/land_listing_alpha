
import { setIsAuthenticated, setisNotAuthenticated } from "../Features/authSlice"
import { AppDispatch } from "../store"

import axios from "axios"




export const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/showUser`, {withCredentials: true})
        
            console.log(data)
            if(data.success){
                const {name , userId , role} = data.user
                dispatch(setIsAuthenticated({
                    name,
                    userId,
                    role
                }))
                
            }
            

        } catch (error) {
            console.log(error)
            dispatch(setisNotAuthenticated())
        }
    }
}


