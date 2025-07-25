import axios from 'axios';
import './Posts.css'
import './Modal.css'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Posts({title,body,created_at,user_id}){
    const dialogRef = useRef();

    const [user,setUser] = useState(null);
    
    // useEffect(()=>{
    //     const fetchUser=async()=>{
    //         const response = await axios.get(`http://localhost:3000/user/${user_id}`)
    //         console.log(response.data.user)
    //         setUser(response.data.user)
    //     }
    //     fetchUser();
    // },[])
   
    const onHandleClick=async()=>{
        
        
        if(!dialogRef.current.open){
            dialogRef.current.show();
        }
        
        
    }

    const onCloseClick = ()=>{
        dialogRef.current.close();
    }

    const [mouseClick,setMouseClick] = useState(false);

    
   const [x,setX] = useState(500);
   const [y,setY] = useState(100)


   const modalOffset = useRef({x:0,y:0});
    const onMouseDown=(e)=>{
        setMouseClick(true)
        const rect = dialogRef.current.getBoundingClientRect();
        
        modalOffset.current.x = e.clientX- rect.left;
        modalOffset.current.y = e.clientY- rect.top;
       
        
    }
    const onMouseUp=()=>{
       
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

    

           
            {/* <dialog className='modal' ref={dialogRef}  style={{top:y,left:x,position:"absolute"}}>
                <div className='select-bar'
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onMouseLeave={()=>{setMouseClick(false)}}
                   
                    
                >
                    <button className='select-bar__button' onClick={onCloseClick}>x</button>
                   
                </div>
                {user && <div className='modal__profile' style={{backgroundColor:"rgba(0,0,0,0.5)",color:"white"}}>
                    
                    
                    <div className='modal__profile-name'>
                        {'Le, David'}
                    </div>
                    <div>
                        {'Bio'}
                    </div>
                    <div>
                        {'Occupation'}
                    </div>
                    <div>
                        {'income'}
                    </div>

                   
                
                
                </div>}


            </dialog> */}
                
                
          
        </>
    )
}

export default Posts;