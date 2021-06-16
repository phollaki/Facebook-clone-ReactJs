import { PinDropSharp } from "@material-ui/icons";
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";
import "./MessageSender.css";
function MessageSender(props) {
  const [enteredText, setEnteredText] = useState("");
  const [input, setInput] = useState("");

  const submitEventHandler = (e) => {
    e.preventDefault();
    //some db stuff
    setEnteredText("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={props.me.picture} />
        <form>
          <input
            value={enteredText}
            onChange={(e) => setEnteredText(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={"What's on your mind " + props.me.name + "?"}
          ></input>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Image URL (Optional)"
          ></input>

          <button onClick={submitEventHandler} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCallIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <MoodIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
