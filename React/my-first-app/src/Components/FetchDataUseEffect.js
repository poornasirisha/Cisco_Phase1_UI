import React, {useState, useEffect} from 'react';

const FetchDataUseEffect = () =>{
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if(!response.ok){
                throw new Error("Not Ok");
            }

            const result = await response.json();
            console.log(result);
            setPosts(result);

        }
        catch(error){
            console.error("Error fetching data");
        }
    }

    return (
        <div>
            <h1>Posts</h1>
            <p>{posts[0].title}</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title} </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataUseEffect;