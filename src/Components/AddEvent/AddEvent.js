import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddEvent.css';



const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        };
        const url = `https://blooming-cliffs-59219.herokuapp.com/addEvent`;
        // console.log(data)
        console.log(eventData);
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('Server side response', res))

    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'befe542b8a378c2bad936403ba007afb');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            console.log(response.data.data.delete_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });


    }
    return (
    <div>

    <form onSubmit={handleSubmit(onSubmit)} className="addEvent">

    <input name="name" defaultValue="New Event" ref={register} /> <br/> <br/>
    <input name="exampleRequired" type="file" onChange={handleImageUpload}/> <br/> <br/>
    <input className="main-button" type="submit" />
    </form>

    </div>
    );
};

export default AddEvent;