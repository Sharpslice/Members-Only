import { useState } from "react"
import './SignupPage.css'
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
function SignupPage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');

    const submitCredentials=()=>{
        console.log({   username: username,
                password: password,
                name: name,
                lastName: lastName
            })
        axios.post(`http://localhost:3000/auth/sign-up`,
            {   username: username,
                password: password,
                name: name,
                lastName: lastName
            }


        );
    }

    const onHandleSubmit =(e)=>{
        
        e.preventDefault()
        // alert(`name: ${name} last name: ${lastName}\n
        //     username: ${username} password: ${password}`)
        console.log('check')
        submitCredentials();
    }
    return (
    <div className='sign-up_container'>
        <form className="sign-up_container__form">

            <div className="sign-up_container__form-info">
                <div className="sign-up_container__form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type='text' 
                        id='firstName'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                       
                    />
                </div>

                <div className="sign-up_container__form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type='text' 
                        id='lastName'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        
                    />
                </div>
                

            </div>
            <div className="sign-up_container__form-group">
                <label htmlFor="username">Username</label>
                <input 
                    type='text' 
                    id='username'
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    
                />
            </div>

            <div className="sign-up_container__form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                  
                />
            </div>

            <button 
                className="sign-up-container__button"
                onClick={(e)=>onHandleSubmit(e)}
            >
                Sign up
            </button>
            <div className="sign-up-container__redirect">
                <span>Already have an account?  </span>
                <Link to='/'>Login</Link>
            </div>





        </form>
    </div>)
}

export default SignupPage