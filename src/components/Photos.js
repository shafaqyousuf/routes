import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Photos = () => {
    let api = "https://jsonplaceholder.typicode.com/photos";
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();

    const getApiData = () => {
        axios.get(api).then((res) => {
            setPhotos([...res.data])
            console.log(res.data)
        }).catch((err) => { console.log(err) })
    }
    // useEffect(() => { getApiData() }, [])

    const moveToSinglePhoto = (i) => {
        navigate(`/SinglePhoto/${i}`)
    }
    return (
        <div className='bg-dark text-white'>
            <h1>Photos</h1>
            {photos.map((x, i) => {
                return <div key={i} onClick={() => moveToSinglePhoto(x.id)}>
                    <img src={x.thumbnailUrl} width="200px" alt="product" />
                </div>
            })}
            <Button label="get photos" onClick={getApiData} />
        </div>
    )
}
export default Photos;