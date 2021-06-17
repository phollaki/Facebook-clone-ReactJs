import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
function Post({ profilePic, username, image, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__infos">
        <div className="post__info">
          <ThumbUpAltIcon
            className="post__infoIcon"
            style={{ color: "blue" }}
          />
          <p>2.5K</p>
        </div>
        <div className="post__info">
          <p>123 Comments</p>
          <p>43 Shares</p>
        </div>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
