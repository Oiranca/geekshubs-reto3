import React from "react";
import './Main.scss';
import multiTasks from '../../img/main/multitask.png'
import storyboard from '../../img/main/storyboard.png'
import automatic from '../../img/main/automatizacion.png'
import {NavLink} from "react-router-dom";

const Main = (props) => {

    return (
        <React.Fragment>

            <section className="containerMain">
                <div className="articleMain">

                    <h3>
                        Organice su trabajo o el de su equipo
                    </h3>

                    <p>Con la herramienta <b>Cards and Tasks</b> podrá organizar todo lo necesario para llevar a cabo
                        las tareas tanto individuales como del equipo de trabajo.</p>
                    <NavLink to="/popular">
                        <span className="linkMain">Comenzar...</span>
                    </NavLink>

                </div>


                <div className="imgMain">
                    <img src={multiTasks} alt="multitaks"/>
                </div>

            </section>


            <section className="containerMain">

                <div className="imgMain">
                    <img src={storyboard} alt="storyboar"/>
                </div>

                <div className="articleMain">

                    <h3>
                        Ordene las tareas a relizar en su proyecto
                    </h3>

                    <p>Con la herramienta <b>Cards and Tasks</b> podrá ordenar y delegar las tareas, tanto en un proyecto <b>personal</b>
                    como en un proyecto para su <b>equipo</b>.</p>


                </div>



            </section>


            <div className="containerMain">
                <div className="articleMain">

                    <h3>
                        Automatice las tareas sencillas
                    </h3>

                    <p>Con la herramienta <b>Cards and Tasks</b> podrá automatizar tareas, para así poder realizar el
                    tabajo con más <b>dinamismo</b>.</p>

                </div>

                <div className="imgMain">
                    <img src={automatic} alt="automatic"/>
                </div>

            </div>
        </React.Fragment>



    );
};

export default Main;
