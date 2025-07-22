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
        }
        fetchMessages();
    })

    return(
        <div className="homepage">
            <div className='message-board'>
                {messages.map((message)=>{
                    return(
                        <Posts
                            title={message.title}
                            body= {message.messages}
                            created_at={message.created_at}
                        />
                    )
                        

                    
                })}
            </div>
        </div>
    )
}
export default HomePage