import './Posts.css'

function Posts({title,body,created_at}){
    return(
        <div className="posts">
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