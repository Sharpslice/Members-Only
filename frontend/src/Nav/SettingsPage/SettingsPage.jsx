import { useState } from 'react'
import './SettingsPage.css'
import FormInput from '../../components/FormInput';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { useEffect } from 'react';
function SettingsPage(){
    const {authUser} =useContext(AuthContext);
    const [name,setName] = useState(authUser.name);
    const [lastName,setLastName] = useState(authUser.last_name);
    const [age,setAge] = useState(null);
    const [bio,setBio] = useState(null);

 

    
    return(
        <div className="settings__container">
            <form className='settings__form'>
                  <FormInput
                    title ={'Name'}
                    inputName={'name'}
                    value ={name}
                    setValue={setName}
                  />
                <FormInput
                    title={'Last Name'}
                    inputName={'last'}
                    value ={lastName}
                    setValue={setLastName}
                />
                <FormInput
                    title={'Age'}
                    inputName={'age'}
                    value ={age}
                    setValue={setAge}
                />
                <FormInput
                    title={'Bio'}
                    inputName={'bio'}
                    value ={bio}
                    setValue={setBio}
                />
                <button className='settings__button'>Save Changes</button>
                
            </form>

        </div>
    )
}
export default SettingsPage