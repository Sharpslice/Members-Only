import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { useEffect } from 'react';
function LoginPage(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate();
    const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
    const [loading,setLoading] = useState(false);
    
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const response = await axios.post(`http://localhost:3000/auth/log-in`,{
            username:username,
            password:password,
            
            },{withCredentials:true})
        if(response.data.success){
            console.log(response.data.message)
            setLoading(true)
            setTimeout(()=>{

                setIsAuthenticated(true)
                navigate('/')

            },2600)
            
        }
        else{
            console.log(response.data.message)
        }
    }
    useEffect(()=>{
        if(isAuthenticated === true){
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isAuthenticated])

    if(loading === true) return (
        <img 
            src='/public/assets/dedsec-animation.gif'
            style={{width:'30%',height:"auto"}}
        />
            
        
    )
    return(
        <div className="log-in__container">

            <div className='log-in__banner'>
                <img 
                    src="/public/assets/dedseclogo.png" 
                    alt="" 
                    style={{width:"200px", height:"auto",objectFit:'cover'}}
                    
                    />
            </div>

            <form className="log-in__form" action="" method="post">
                <div className='log-in__form-group'>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id='username' 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    /> 
                </div>
                
                <div className='log-in__form-group'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password" 
                        id='password' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    
                    />
                </div>

                <div className='form-options'>

                    <div className='form-options__remember-me'>
                        
                        <input type='checkbox' id ='remember-me' name='remember-me'/>
                        <label htmlFor='remember-me'>Remember me</label>
                        
                    </div>
                    <Link className='form-options__link' to="">Forgot Password</Link>
                </div>
                
                <button className='log-in__button' onClick={(e)=>handleSubmit(e)}>Sign in</button>
            </form>

            <div className='log-in__signup'>
                <span>Don't have an account? </span>
                <Link to="sign-up" >Sign up</Link>
            </div>
            
        </div>
    )
}

export default LoginPage