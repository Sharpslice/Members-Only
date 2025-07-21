import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext} from 'react';



const AuthContext = createContext()
function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    useEffect(()=>{
        const checkAuthentication=async()=>{
            try{
                const response = await axios.get(`http://localhost:3000/auth/check-auth`,{withCredentials:true});
                if(response.status === 200){
                    console.log(response.data.message)
                    setIsAuthenticated(true)
                    console.log('authenticating')
                }
                else{
                    setIsAuthenticated(false)
                    console.log(response.data.message)
                }
             
            }catch(error)
            {
                console.error('authentication fetch failed',error.message)
            }
            
        }


        checkAuthentication()

    },[])
    
    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )

}



export  {AuthProvider,AuthContext};