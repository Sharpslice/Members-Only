import { Link } from 'react-router-dom'
import './LoginPage.css'
function LoginPage(){
    return(
        <div className="log-in__container">

            <div className='log-in__banner'>
                LOG IN
            </div>

            <form className="log-in__form" action="" method="post">
                <div className='log-in__form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' name ='username'/> 
                </div>
                
                <div className='log-in__form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' name='password'/>
                </div>

                <div className='form-options'>

                    <div className='form-options__remember-me'>
                        
                        <input type='checkbox' id ='remember-me' name='remember-me'/>
                        <label htmlFor='remember-me'>Remember me</label>
                        
                    </div>
                    <Link className='form-options__link' to="">Forgot Password</Link>
                </div>
                
                <button className='log-in__button' type='submit'>Sign in</button>
            </form>

            <div className='log-in__signup'>
                <span>Don't have an account? </span>
                <Link >Sign up</Link>
            </div>
            
        </div>
    )
}

export default LoginPage