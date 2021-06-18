import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import { useState } from "react";
import db from "./firebase";
import { useEffect } from "react";
function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel me={props.me} />
      <MessageSender me={props.me} />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          username={post.data.username}
          timestamp={post.data.timestamp}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
