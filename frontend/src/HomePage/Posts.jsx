import axios from 'axios';
import './Posts.css'

function Posts({title,body,created_at,user_id}){

    const onHandleClick=async()=>{
        const response = await axios.get(`http://localhost:3000/user/${user_id}`)
        console.log(response.data.user)
    }

    return(
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
    )
}

export default Posts;