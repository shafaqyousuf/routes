import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
const Todos = () => {
    let api = "https://jsonplaceholder.typicode.com/todos";
    const [todos, setTodos] = useState([]);

    const getApiData = () => {
        axios.get(api).then((res) => {
            setTodos([...res.data])
            console.log(res.data)
        }).catch((err) => { console.log(err) })
    }
    return (
        <div className='bg-dark text-white'>
            <h1>Todos</h1>
            {todos.map((x, i) => {
                return <div key={i}>
                    <p>{x.id}:{x.title}</p>
                </div>
            })}
            <Button label="get todos" onClick={getApiData} />
        </div>
    )
}
export default Todos;