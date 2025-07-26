import axios from 'axios';
import './Posts.css'
import './Modal.css'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from './Modal';

function Posts({title,body,created_at,user_id}){
    const dialogRef = useRef();

    const [user,setUser] = useState(null);
   
    const onHandleClick=async()=>{
        if(!dialogRef.current.open){
            const response = await axios.get(`http://localhost:3000/user/${user_id}`)
            console.log(response.data.user)
            setUser(response.data.user)
            
            
            
            dialogRef.current.show();




        }
        
        
    }

    const onCloseClick = ()=>{
        dialogRef.current.close();
    }
    
    

    

    return(
        <>
            <div className="posts" onClick={onHandleClick}>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    {body}
                </div>
                <div>
                    {created_at}
                </div>

            </div>
            <Modal user={user} dialogRef={dialogRef} onCloseClick={onCloseClick}/>
    

           
           
                
          
        </>
    )
}

export default Posts;