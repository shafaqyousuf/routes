import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Button from "../components/Button"

const Singlephoto = () => {
    const param = useParams;
    console.log(param)

    let api = `https://jsonplaceholder.typicode.com/photos/${param.id}`;
    const [photo, setPhoto] = useState([]);

    const getApiData = () => {
        axios.get(api).then((res) => { setPhoto([...res.data]) }).catch((err) => { console.log(err) })
        return (
            <>
                <div className='bg-dark text-white'>
                    {photo.map((x, i) => {
                        return <div key={i}>
                            <img src={x.thumbnailUrl} width="200px" alt="product" />
                        </div>
                    })}
                    <Button label="get single photo" onClick={getApiData} />
                </div>
            </>
        )
    }
}
export default Singlephoto;
