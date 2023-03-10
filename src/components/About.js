import React, { useEffect, useState } from 'react'
import { Get } from './apihandle';
import Table from './Table';

const About = () => {
    let [user, setUser] = useState([]);
    let col = [
        {
            displayName: "Name",
            key: "name"
        },
        {
            displayName: "Email",
            key: "email"
        },
        {
            displayName: "Contact#",
            key: "phone"
        },
        {
            displayName: "Website",
            key: "website"
        }
    ];

    let getUser = () => {
        Get("users").then((res) => { setUser([...res.data]) }).catch((err) => { console.log(err) })
        console.log(user)
    }
    useEffect(() => { getUser() }, [])
    return (
        <>
            <Table title="Users Data" col={col} dataSource={user} />
        </>
    )
}

export default About;