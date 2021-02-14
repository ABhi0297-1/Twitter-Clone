import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
function TweetBox() {
   const[tweetMessage,setTweetMessage]=useState("");
   const[tweetImage,setTweetImage]=useState("");
const sendTweet = (e) =>{
e.preventDefault();
db.collection("posts").add(
    {
        displayName:"Abhinav Saxena",
        username:"@AbhinavSaxena",
        verified: true,
        text:tweetMessage,
        image:tweetImage,
        avatar:"https://image.shutterstock.com/image-vector/demo-icon-260nw-212576080.jpg", 
    }
);
setTweetImage("");
setTweetMessage("");
}
   return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox__input">
        <Avatar
        src="https://image.shutterstock.com/image-vector/demo-icon-260nw-212576080.jpg"
    />
        <input 
        onChange={e => setTweetMessage(e.target.value)}
        value={tweetMessage}
         placeholder="Whats happening?" 
         type="text"/>
        </div>
        <input 
        onChange={e => setTweetImage(e.target.value)}
        value={tweetImage}
        className="tweetBox__imageInput" 
        placeholder="Optional:Enter image URL"
         type="text"/>

<Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>

            </form>
            
        </div>
    )
}

export default TweetBox
