import React, {useState} from "react";
import './SecondNav.scss'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faEye, faConciergeBell, faEllipsisH, faStar} from '@fortawesome/free-solid-svg-icons'
import ModalBoardsType from "../../modals/ModalBoardType";
import ModalBoardsVisibility from "../../modals/ModalBoardVisibility";

const SecondNav = (props) => {


    const [show, setShow] = useState(false);


    const showModal = () => {
        if (show === false) {
            setShow(true);

        } else {
            setShow(false);

        }

       setShowBis(false);
    };



    const [showBis, setShowBis] = useState(false);


    const showModalBis = () => {
        if (showBis === false) {
            setShowBis(true);

        } else {
            setShowBis(false);

        }

     setShow(false);
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
                        <Nav.Link onClick={showModal}>

                            <div className="buttonBigWidth">

                                <span>  Board Type</span>

                            </div>
                        </Nav.Link>
                        <Nav.Link onClick={showModalBis}>
                            <div className="buttonBigWidth">
                                <FontAwesomeIcon className="iconsFontAwesome" icon={faEye}/>

                                <span>Visibility Status</span>

                            </div>
                        </Nav.Link>

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

                        <div className="buttonBigWidth">
                            <FontAwesomeIcon className="iconsFontAwesome" icon={faEllipsisH}/>
                            <NavDropdown title="Mostrar Menú" id="dropsNavs">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </div>

                    </Nav>

            </Navbar>
            <div className="containerModals">
                <div className="modalType">

                    <ModalBoardsType value={show}/>
                </div>
                <div className="modalVisibility">

                    <ModalBoardsVisibility show={showBis}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SecondNav;
