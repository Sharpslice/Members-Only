
import './FormInput.css'
function FormInput({title,inputName,value,setValue}){
    return(
        <>
             <div className='log-in__form-group'>
                    <label htmlFor={inputName}>{title}</label>
                    <input 
                        type="text" 
                        id={inputName} 
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                    /> 
                </div>
        
        </>


    )

}

export default FormInput;