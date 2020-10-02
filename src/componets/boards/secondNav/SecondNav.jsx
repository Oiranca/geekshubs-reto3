import React, {useState} from "react";
import './SecondNav.scss'
import {Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faEye, faConciergeBell, faEllipsisH, faStar} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../sidebar/Sidebar";
import SidebarType from "./sidebarType/SidebarType";
import SidebarVisibility from "./sidebarVisibility/SidebarVisibility";


const SecondNav = (props) => {


    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {

        setSidebar(!sidebar);
        setSidebarType(false);
        setSidebarVisibility(false)

    };
    const [sidebarType, setSidebarType] = useState(false);

    const showSidebarType = () => {

        setSidebarType(!sidebarType);
        setSidebar(false);
        setSidebarVisibility(false);


    };

    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    const showSidebarVisibility = () => {

        setSidebarVisibility(!sidebarVisibility);
        setSidebar(false);
        setSidebarType(false);


    };
    return (
        <React.Fragment>
            <Navbar className="secondNav" expand="lg">
                <Form inline>
                    <FormControl type="text" placeholder="Here board name" className="mr-sm-2"/>
                </Form>

                <Nav className="mr-auto navLeft">
                    <div id="starNav">
                        <FontAwesomeIcon icon={faStar}/>
                    </div>

                    <Nav.Link onClick={showSidebarType}>
                        <div className="buttonBigWidth">
                            <span>  Board Type</span>
                        </div>
                    </Nav.Link>

                    <SidebarType show={sidebarType}/>

                    <Nav.Link onClick={showSidebarVisibility}>
                        <div className="buttonBigWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faEye}/>

                            <span>Visibility Status</span>

                        </div>
                    </Nav.Link>

                    <SidebarVisibility showVisibility={sidebarVisibility}/>
                </Nav>
                <Nav className="navRight">
                    <Nav.Link href="#link">
                        <div className="buttonMediumWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faCalendarAlt}/>
                            <span>Calendar</span>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <div className="buttonMediumWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faConciergeBell}/>
                            <span>Butler</span>
                        </div>
                    </Nav.Link>
                    <Nav.Link onClick={showSidebar}>
                        <div className="buttonBigWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faEllipsisH}/>
                            <span>Mostar Menú</span>
                        </div>
                    </Nav.Link>
                    <Sidebar sidebarShow={sidebar} sidebarClose={showSidebar}/>

                </Nav>

            </Navbar>

        </React.Fragment>
    );

}

export default SecondNav;
