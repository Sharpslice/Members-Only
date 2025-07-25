import { useEffect } from 'react'
import './HomePage.css'
import { useState } from 'react'
import axios from 'axios';
import Posts from './Posts';
function HomePage(){

    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        const fetchMessages=async()=>{
            const response = await axios.get(`http://localhost:3000/post/all`);
            setMessages(response.data.listOfMessages);
            console.log('hello')
        }
        fetchMessages();
    },[])

    return(
        <div className="homepage">
            <div className='message-board'>
                {messages.map((message)=>{
                    return(
                        <Posts
                            key={message.id}
                            title={message.title}
                            body= {message.messages}
                            created_at={message.created_at}
                            user_id = {message.user_id}
                        />
                    ) 
                })}
            </div>
        </div>
    )
}
export default HomePage