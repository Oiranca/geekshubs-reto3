import React from "react";
import './Main.scss';
import multiTasks from '../../img/main/multitask.png'
import {NavLink} from "react-router-dom";

const Main = (props) => {

    return (
        <div className="row containerMain">
            <div className="articleMain">

                    <h3>
                        Organice su trabajo o el de su equipo
                    </h3>

                    <p>Con la herramienta <b>Cards and Tasks</b>
                        podrá organizar todo lo necesario para llevar a cabo
                        las tareas tanto individuales como del equipo de trabajo</p>
                    <NavLink to="/popular">
                        <span className="linkMain">Comenzar...</span>
                    </NavLink>

            </div>


            <div className="imgMain">
                <img src={multiTasks} alt="multitaks"/>
            </div>

        </div>

    );
};

export default Main;
