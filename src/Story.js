import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";
function Story({ avatar, picture, name }) {
  return (
    <div style={{ backgroundImage: `url(${picture})` }} className="story">
      {<Avatar className="story__avatar" src={avatar} />}
      <h4>{name}</h4>
    </div>
  );
}

export default Story;
