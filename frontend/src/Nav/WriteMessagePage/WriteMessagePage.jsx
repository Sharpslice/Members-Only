import { useState } from 'react'
import './WriteMessagePage.css'
import axios from 'axios'

function WriteMessagePage(){
    const [title,setTitle] = useState("")
    const [textfield, setTextfield] = useState("")

    const onPostSubmit =async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:3000/post/create`,
            {title:title,message:textfield},
            {withCredentials:true}

        )
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