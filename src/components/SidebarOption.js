import "./SidebarOption.css";
import React from "react";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="option">
      {Icon && <Icon className="option-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
