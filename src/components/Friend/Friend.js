import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name,id,email,phone,website,address}=props.friend;
    const history=useHistory();
    const handleClick=()=>{
        history.push(`friend/${id}`)
    }
   
    return (
        <div className="friend">
            <h2>I am : {name} {id}</h2>
            <h3>Call me: {phone}</h3>
            <h4>{email}</h4>
            <h5>Visit me: {website}</h5>
            <p>City:{address.city}</p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br />
            <button onClick={handleClick}>see Details</button>

            
        </div>
    );
};

export default Friend;