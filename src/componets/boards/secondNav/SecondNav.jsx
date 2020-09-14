import React from "react";
import './SecondNav.scss'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faEye, faConciergeBell, faEllipsisH, faStar} from '@fortawesome/free-solid-svg-icons'

const SecondNav = (props) => {
    return (

        <Navbar className="secondNav" expand="lg">
            <Form inline>
                <FormControl type="text" placeholder="Here board name" className="mr-sm-2"/>
            </Form>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <div id="starNav">
                        <FontAwesomeIcon icon={faStar}/>
                    </div>

                    <div className="buttonType">
                        <NavDropdown title="Board Type" id="dropType">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </div>


                    <div className="buttonBigWidth">
                        <FontAwesomeIcon className="iconsFontAwesome" icon={faEye}/>
                        <NavDropdown title="Visibility Status" id="dropVisibility">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </div>


                </Nav>
                <Nav className="navRight">
                    <Nav.Link href="#link">
                        <div className="buttonMediumWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faCalendarAlt}/>
                            <span>Calendar</span>
                        </div>
                    </Nav.Link>
                    <div className="buttonMediumWidth">
                        <FontAwesomeIcon className="iconsFontAwesome" icon={faConciergeBell}/>
                        <NavDropdown title="Butler" id="dropButler">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </div>


                    <div className="buttonBigWidth">
                        <FontAwesomeIcon className="iconsFontAwesome" icon={faEllipsisH}/>
                        <NavDropdown title="Mostrar Menú" id="dropVisibility">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                    </div>

                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default SecondNav;
