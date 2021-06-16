import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
function Feed(props) {
  return (
    <div className="feed">
      <StoryReel me={props.me} />
      <MessageSender me={props.me} />
      <Post
        profilePic={props.me.picture}
        message={"What's up guys"}
        timestamp={"2021.06.16"}
        username={props.me.name}
        image={
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicycle-on-grassy-field-in-park-royalty-free-image-1589916167.jpg?crop=0.721xw:0.541xh;0,0.317xh&resize=1200:*"
        }
      />
      <Post
        profilePic={props.me.picture}
        message={"What's up guys"}
        timestamp={"2021.06.16"}
        username={props.me.name}
        image={
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicycle-on-grassy-field-in-park-royalty-free-image-1589916167.jpg?crop=0.721xw:0.541xh;0,0.317xh&resize=1200:*"
        }
      />
      <Post
        profilePic={props.me.picture}
        message={"What's up guys"}
        timestamp={"2021.06.16"}
        username={props.me.name}
        image={
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicycle-on-grassy-field-in-park-royalty-free-image-1589916167.jpg?crop=0.721xw:0.541xh;0,0.317xh&resize=1200:*"
        }
      />
    </div>
  );
}

export default Feed;
