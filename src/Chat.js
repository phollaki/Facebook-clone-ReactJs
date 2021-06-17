import React from "react";
import "./Chat.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Contact from "./Contact";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <h3>Contacts</h3>
        <div className="chat__headerIcons">
          <div className="chat__headerIcon">
            <VideoCallIcon />
          </div>
          <div className="chat__headerIcon">
            <SearchIcon />
          </div>
          <div className="chat__headerIcon">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          name="Hajnal Péter"
        />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhCJNIlelTV4elkP3vMo6-4v3BNPmZL2NvykJUH5Uj8jheR7IzmotcVr25tBN3RF0vcUZe7ZdJummOQ&usqp=CAU"
          name="Sütő Józsefné"
        />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635"
          name="Berkes Krisztián"
        />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          name="Szőke Bettina"
        />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Cserpes Richárd"
        />
      </div>
      <div className="chat__contact">
        <Contact profilePic="" name="Takács Tamás" />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://cdn.nwmgroups.hu/s/img/i/2101/20210106kempf-zozo-az-exatlonban.jpg"
          name="Kempf Zozo"
        />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://specials-images.forbesimg.com/imageserve/5df3d3c64e291700078306e5/416x416.jpg?background=000000&cropX1=35&cropX2=4124&cropY1=30&cropY2=4119"
          name="Szőke Eliána"
        />
      </div>
      <div className="chat__contact">
        <Contact
          profilePic="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg"
          name="Horváth Lilla"
        />
      </div>
    </div>
  );
}

export default Chat;
