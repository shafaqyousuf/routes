import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
const About = () => {
    let api = "https://jsonplaceholder.typicode.com/users";
    const [user, setUser] = useState([]);

    const getApiData = () => {
        axios.get(api).then((res) => { setUser([...res.data]) }).catch((err) => { console.log(err) })
    }
  return (
    <div className='bg-dark text-white'>
    <h1>About</h1>
    {user.map((x,i)=>{
                return <div key={i}>
                <p>{x.id}:{x.email}</p>
                </div>
            })}
            <Button label="get users" onClick={getApiData} />
        </div>
    )
}
export default About;