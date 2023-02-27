import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../components/Button"
import axios from 'axios';

const Home = () => {
    let api = "https://jsonplaceholder.typicode.com/posts";
    const [post, setPost] = useState([]);

    const getApiData = () => {
        axios.get(api).then((res) => { setPost([...res.data]) }).catch((err) => { console.log(err) })
    }
    return (
        <div className='bg-dark text-white'>
            <h1>Home</h1>
            {post.map((x,i)=>{
                return <div key={i}>
                <p>{x.id}:{x.title}</p>
                </div>
            })}
            <Button label="get posts" onClick={getApiData} />
        </div>
    )
}
export default Home;