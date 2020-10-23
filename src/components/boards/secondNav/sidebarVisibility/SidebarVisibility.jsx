import React from "react";

import PropTypes from "prop-types";
import "./SidebarVisibility.scss";
import {IconContext} from "react-icons";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

const SidebarVisibility = (props) => {


    let sidebar = props.showVisibility;


    return (
        <React.Fragment>
            <IconContext.Provider value={{color: "#fff"}}>

                <nav className={sidebar ? "nav-menu-visibility active" : "nav-menu-visibility"}>
                    <ul className="nav-menu-items-visibility">
                        <h6>Cambiar visibilidad</h6>
                        <div className="container-type-visibility">
                            <article>
                                <AiIcons.AiOutlineLock/>
                                <span>Privado</span>
                                <p>
                                    Únicamente los miembros del tablero pueden verlo y editarlo.
                                </p>
                            </article>
                            <article>
                                <AiIcons.AiOutlineTeam/>
                                <span>Equípo</span>
                                <p>
                                    Todos los miembros del tablero pueden verlo y editarlo.
                                    Para habilitar esta función el tablero debe añadirse a un
                                    equipo o empresa.
                                </p>
                            </article>

                            <article>
                                <BiIcons.BiWorld/>
                                <span>Público</span>
                                <p>
                                    Cualquiera puede ver este tablero.
                                    Pero únicamente los miembros del tablero pueden editarlo.
                                </p>
                            </article>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </React.Fragment>
    );


};

SidebarVisibility.prototype = {
    sidebarClose: PropTypes.func.isRequired
}

export default SidebarVisibility;
