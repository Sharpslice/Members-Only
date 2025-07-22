import axios from 'axios';
import './Posts.css'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Posts({title,body,created_at,user_id}){
    const dialogRef = useRef();

    

   
    const onHandleClick=async()=>{
        const response = await axios.get(`http://localhost:3000/user/${user_id}`)
        console.log(response.data.user)
        if(!dialogRef.current.open){
            dialogRef.current.show();
        }
        
    }

    
    const [mouseClick,setMouseClick] = useState(false);

    const [modalX,setModalX] = useState()
    const [modalY,setModalY] = useState()
    const[x,setX]=useState(null)
    const[y,setY]= useState(null)

  

   

    const onMouseDown=(e)=>{
        
        setMouseClick(true)
      
        const rect = dialogRef.current.getBoundingClientRect()
        
        setModalX(rect.left)
        setModalY(rect.top)
      
    }
    const onMouseUp=(e)=>{
       
        setMouseClick(false)
        console.log('lifting up')
        
    }
    const onMouseMove=(e)=>{
        if(!mouseClick) return;
        
        const currentX = (e.clientX - modalX)
        const currentY = (e.clientY - modalY)
        const thisx = currentX
        const thisy = currentY
        
        setX(thisx);
        setY(thisy);
        
        
 
        
        
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
            <dialog 
                ref={dialogRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                onMouseLeave={()=>{setMouseClick(false)}}
                style={{width:'5rem',height:'2rem',transform: `translate(${x}px,${y}px)`}}
            >
                <p>{user_id}</p>
            </dialog>
        </>
    )
}

export default Posts;