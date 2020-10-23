import React from "react";

import PropTypes from "prop-types";
import "./SidebarType.scss";
import {IconContext} from "react-icons";
import {Button, Form} from "react-bootstrap";

const SidebarType = (props) => {


    let sidebar = props.show;


    return (
        <React.Fragment>
            <IconContext.Provider value={{color: "#fff"}}>

                <nav className={sidebar ? "nav-menu-type active" : "nav-menu-type"}>
                    <ul className="nav-menu-items-type">
                        <h6>Añadir a un equipo</h6>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="nav-text-type">
                                <Form.Label>Este tablero forma parte de...</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="buttonType">
                            <Button>Añadir</Button>
                            <Button>Crear equipo...</Button>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </React.Fragment>
    );


};

SidebarType.prototype = {
    sidebarClose: PropTypes.func.isRequired
}

export default SidebarType;
