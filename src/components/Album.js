import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
const Album = () => {
    let api = "https://jsonplaceholder.typicode.com/albums";
    const [albums, setAlbums] = useState([]);

    const getApiData = () => {
        axios.get(api).then((res) => { setAlbums([...res.data]) }).catch((err) => { console.log(err) })
    }
  return (
    <div className='bg-dark text-white'>
    <h1>Album</h1>
    {albums.map((x,i)=>{
                return <div key={i}>
                <p>{x.id}:{x.title}</p>
                </div>
            })}
            <Button label="get albums" onClick={getApiData} />
        </div>
    )
}
export default Album;