import React from "react";
import menuDots from "../../../img/icon/menu-de-puntos.svg";
import menuHome from "../../../img/icon/home.svg";
import menuBoards from "../../../img/icon/tareas.svg";
import menuSearch from "../../../img/icon/busqueda.svg";
import logoIcon from "../../../img/icon/LogoMakr_Icon.png";
import menuPlus from "../../../img/icon/añadir.svg";
import menuInfo from "../../../img/icon/informacion.svg";
import menuNotification from "../../../img/icon/alarma.svg";
import menuProfile from "../../../img/icon/usuario.svg";
import './FirstNav.scss'





const FirstNav =(prop)=>{

    const valueX = "4";
    const valueY = "4"

    return(
        <header className="navHeader">
            <div className="svgButtons">
                <button className="header-button" type="submit">
                    <svg>
                        <image href={menuDots} x={valueX} y={valueY}/>
                    </svg>
                </button>
                <button className="header-button" type="submit">

                    <svg>
                        <image href={menuHome} x={valueX} y={valueY}/>
                    </svg>

                </button>
                <button className="header-button" type="submit">
                    <svg>
                        <image href={menuBoards} x={valueX} y={valueY}/>
                    </svg>

                </button>
                <button className="header-button" type="submit">
                    <svg>
                        <image href={menuSearch} x={valueX} y={valueY}/>
                    </svg>

                </button>
            </div>
            <div className="headerTitle">
                <img src={logoIcon} alt="Logo Icon"/>
                <p> CARDS AND TASKS</p>
            </div>


            <div className="svgButtons">
                <button className="header-button" type="submit">
                    <svg>
                        <image href={menuPlus} x={valueX} y={valueY}/>
                    </svg>
                </button>
                <button className="header-button" type="submit">

                    <svg>
                        <image href={menuInfo} x={valueX} y={valueY}/>
                    </svg>

                </button>
                <button className="header-button" type="submit">
                    <svg>
                        <image href={menuNotification} x={valueX} y={valueY}/>
                    </svg>

                </button>
                <button className="header-button" type="submit">
                    <svg>
                        <image href={menuProfile} x={valueX} y={valueY}/>
                    </svg>

                </button>
            </div>
        </header>

    );

}
export default FirstNav;
