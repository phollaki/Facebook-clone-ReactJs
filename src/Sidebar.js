import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Storefront } from "@material-ui/icons";
import EventIcon from "@material-ui/icons/Event";
import RestoreIcon from "@material-ui/icons/Restore";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Sidebar(props) {
  return (
    <div className="sidebar">
      <SidebarRow src={props.me.picture} title={props.me.name} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={RestoreIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={Storefront} title="See More" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
