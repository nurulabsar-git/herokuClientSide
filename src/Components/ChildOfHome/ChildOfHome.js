import React from 'react';
import './ChildOfHome.css';

const ChildOfHome = (props) => {
    const {name, imageURL} = props.event;
    console.log('This is event', props);
    console.log("This is image", imageURL);
    return (
        <div className="event-style">
        <img src={imageURL} alt="image"/>
           <h3>{name}</h3>
       </div>
    );
};

export default ChildOfHome;