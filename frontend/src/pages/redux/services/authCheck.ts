
import { setIsAuthenticated, setisNotAuthenticated } from "../Features/authSlice"
import { AppDispatch } from "../store"

import axios from "axios"




const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`http://localhost:4000/api/v1/auth/showUser`, {withCredentials: true})
        
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


export default checkAuthentication