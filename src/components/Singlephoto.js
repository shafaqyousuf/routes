import React from 'react'
import { useParams} from 'react-router-dom';
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
                    <h1>SinglePhoto</h1>
                    {photo.map((x, i) => {
                        return <div key={i}>
                            <p>{x.id}</p>
                        </div>
                    })}
                    <Button label="get single photo" onClick={getApiData} />
                </div>
            </>
        )
    }
}
export default Singlephoto;
