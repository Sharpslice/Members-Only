import { useState } from 'react'
import './SettingsPage.css'
import FormInput from '../../components/FormInput';
function SettingsPage(){
    const [name,setName] = useState(null);
    const [lastName,setLastName] = useState(null);
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
                
                
            </form>

        </div>
    )
}
export default SettingsPage