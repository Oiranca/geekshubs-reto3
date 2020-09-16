import React, {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import "./Sidebar.scss";
import {IconContext} from "react-icons";

const Sidebar = (props) => {


    let sidebar = props.sidebarShow;

    const {sidebarClose} = props;

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={sidebarClose}>
                        <li className="navbar-toogle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((items, index) => {
                            return (
                                <li key={index} className={items.cName}>
                                    <Link to={items.path}>
                                        {items.icon}
                                        <span>{items.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );


};

Sidebar.prototype = {
    sidebarClose: PropTypes.func.isRequired
}

export default Sidebar;
