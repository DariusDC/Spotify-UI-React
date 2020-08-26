import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../DataLayer";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="avatar-side">
        <Avatar className="avatar" src={user?.images[0]} />
        <p>{user?.display_name}</p>
      </div>
    </div>
  );
};

export default Header;
