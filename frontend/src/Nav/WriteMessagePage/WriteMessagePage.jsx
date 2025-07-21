import { useState } from 'react'
import './WriteMessagePage.css'

function WriteMessagePage(){
    const [title,setTitle] = useState("")
    const [textfield, setTextfield] = useState("")

    const onPostSubmit =(e)=>{
        e.preventDefault();
        console.log("hey")
    }
    return(
        <div className="write-container">
            <form className="post-form">
                <input
                    className="post-form__input:title"
                    type="text"
                    placeholder="title"
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}

                />

                <textarea 
                    className='post-form__textfield'
                    value ={textfield}
                    onChange={(e)=>setTextfield(e.target.value)}
                />

                <button onClick={(e)=>onPostSubmit(e)}>
                    Post
                </button>
                




            </form>
        </div>

    )
}

export default WriteMessagePage