import React , {useEffect , useState} from "react";

function PostComponent() {
    const [data , setData] = useState([]) ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if(!response.ok) {
                throw new Error("HTTP error !") ;
            };
            return response.json() ;
        })
        .then(posts => {
            setData(posts)
        },[])
    })
    return (
        <>
        {
            data.map(post => (
                <p key={post.id}>{post.title}</p>
            ))
        }
        </>
    )
}

export default PostComponent