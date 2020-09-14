import React from "react";
import './SecondNav.scss'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt,faEye,faConciergeBell,faEllipsisH, faStar} from '@fortawesome/free-solid-svg-icons'

const SecondNav = (props) => {
    return (

        <Navbar className="secondNav" expand="lg">
            <Form inline>
                <FormControl type="text" placeholder="Here board name" className="mr-sm-2"/>
            </Form>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto leftMenu">
                    <Nav.Link href="#home">
                        <div id="starNav">
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <div id="buttonType">
                            <span>Board Type</span>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <div className="buttonBigWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faEye}/>
                            <span>Visibility Status</span>
                        </div>
                    </Nav.Link>

                </Nav>
                <Nav className="mr-0 rightMenu">
                    <Nav.Link href="#link">
                        <div className="buttonMediumWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faCalendarAlt}/>
                            <span>Calendar</span>
                        </div>
                    </Nav.Link> <Nav.Link href="#link">
                    <div className="buttonMediumWidth">
                        <FontAwesomeIcon className="iconsFontAwesome" icon={faConciergeBell}/>
                        <span>Butler</span>
                    </div>
                </Nav.Link> <Nav.Link href="#link">
                    <div className="buttonBigWidth">
                        <FontAwesomeIcon className="iconsFontAwesome" icon={faEllipsisH}/>
                        <span>Mostrar Menú</span>
                    </div>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default SecondNav;
