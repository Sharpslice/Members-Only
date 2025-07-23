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

    
   const [x,setX] = useState(500);
   const [y,setY] = useState(100)

   const [modalX,setModalX] = useState(0)
   const [modalY,setModalY] = useState(0)

   const modalOffset = useRef({x:0,y:0});
    const onMouseDown=(e)=>{
        setMouseClick(true)
        const rect = dialogRef.current.getBoundingClientRect();
        // setModalX(rect.left)
        // setModalY(rect.top)
        modalOffset.current.x = e.clientX- rect.left;
        modalOffset.current.y = e.clientY- rect.top;
        console.log(rect.left,rect.top)
        
    }
    const onMouseUp=(e)=>{
       
        setMouseClick(false)
        console.log(x,y)
        
        
        
    }
    const onMouseMove=(e)=>{
        if(!mouseClick) return;
        
        
         setX(e.clientX - modalOffset.current.x)
         setY(e.clientY -modalOffset.current.y);
        
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

            <div>

           
                <dialog 
                    ref={dialogRef}
                    
                    style={{
                        width:'5rem',
                        height:'2rem',
                        //  transform: `translate(${x}px,${y}px)`,
                         top:y,
                         left:x,
                        position:"absolute"
                        
                       

                    }}
                >
                    <div
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        onMouseLeave={()=>{setMouseClick(false)}}
                        style={{ userSelect:'none'}}
                    >
                        hello
                        
                    </div>
                    <div style={{backgroundColor:"rgba(0,0,0,0.5)",color:"white"}}>{user_id}</div>
                </dialog>
                
                
             </div>
        </>
    )
}

export default Posts;