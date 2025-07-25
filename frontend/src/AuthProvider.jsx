import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext} from 'react';



const AuthContext = createContext()
function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated] = useState(null)
    const [authUser,setAuthUser] = useState(null)
    useEffect(()=>{
        const checkAuthentication=async()=>{
            try{
                const response = await axios.get(`http://localhost:3000/auth/check-auth`,{withCredentials:true});
                
                    console.log(response.data.message)
                    setIsAuthenticated(true)
                    setAuthUser(response.data.user)
                    console.log('authenticating')
                
            }catch(error)
            {
                if(error.response.status===401){
                    setIsAuthenticated(false)
                    console.log(error.response.data.message)
                }
                else{
                    console.error('authentication fetch failed',error.message)
                }
                
            }
            
        }


        checkAuthentication()

    },[])
    
    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,authUser}}>
            {children}
        </AuthContext.Provider>
    )

}



export  {AuthProvider,AuthContext};