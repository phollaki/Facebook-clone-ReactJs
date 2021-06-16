import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel(props) {
  return (
    <div className="storyReel">
      <Story
        avatar={props.me.picture}
        picture="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        name={props.me.name}
      />
      <Story
        avatar="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"
        picture="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        name="Horváth Péter"
      />
      <Story
        avatar="https://static.dw.com/image/38197787_303.jpg"
        picture="https://bringazas.hu/wp-content/uploads/2021/04/bora-hansgrohe-peter-sagan-tour-de-hongrie-2021-bringazas.jpg"
        name="Peter Sagan"
      />
      <Story
        avatar="https://img.a.transfermarkt.technology/portrait/big/39983-1448464012.jpg?lm=1"
        picture="http://www.villeinitalia.com/blog/wp-content/uploads/2017/06/italia-campione-del-mondo.jpg"
        name="Leonardo Bonucci"
      />
      <Story
        avatar="https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=6&m=1129638608&s=612x612&w=0&h=8OhKQCq_elLsW_PAWA4n8pzQy3mlkf5a_ztp2Nbv8Y8="
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKygiRaXWWuefWQpNzgpwhjbUfKlYyvpqXVslkWc_j5h3m5XhomzhrMBjiB3O42yA4YXiWfXDNtzXbQQ&usqp=CAU"
        name="Németh Bettina"
      />
    </div>
  );
}

export default StoryReel;
