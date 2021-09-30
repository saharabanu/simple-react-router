import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friend,setFriend]=useState({});
    const history=useHistory();
    
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    const handleAllFriendClick=()=>{
        history.push('/friends')
    }
   
    return (
        <div>
            <h2>Friend id Number{friendId}</h2>
            <h2>{friend.name}</h2>
            <h3>{friend.phone}</h3>
            <h4>{friend.website}</h4>
            <p>Works at{friend.company?.name}</p>
            <button onClick={handleAllFriendClick}>See All Friend</button>
        </div>
    );
};

export default FriendDetail;