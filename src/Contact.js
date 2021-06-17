import React from "react";
import "./Contact.css";
import { Avatar } from "@material-ui/core";
function Contact({ profilePic, name }) {
  return (
    <div className="contact">
      {Avatar && <Avatar className="contact__avatar" src={profilePic} />}
      <p>{name}</p>
    </div>
  );
}

export default Contact;
