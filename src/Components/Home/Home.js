import React, { useEffect, useState } from 'react';
import ChildOfHome from '../ChildOfHome/ChildOfHome';

import './Home.css';
const Home = () => {

    const [hello, setHello] = useState([]);
    useEffect(() => {
        fetch('https://blooming-cliffs-59219.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setHello(data))
    }, [])
    return (
        <div className="container">
           {
               hello.map(ev => <ChildOfHome event={ev}></ChildOfHome>)
           }
        </div>
    );
};

export default Home;