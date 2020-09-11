import React from "react";
import {NavLink} from "react-router-dom";
import './Header.scss'
import logo from '../../img/logo/LogoMakr.png'



const Header = (props) => {

    return (
        <React.Fragment>
            <div className="mainHeader">
                <img src={logo} alt="Logo"/>
                <div className="buttonMain">
                    <NavLink to="/popular">
                        <span className="linkMain">Iniciar Sesión</span>

                    </NavLink>
                    <NavLink to="/upcoming">
                        <span className="linkMain">Registrase</span>
                    </NavLink>
                </div>

            </div>



        </React.Fragment>


    )
}

export default Header;
