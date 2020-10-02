import React, {useState} from "react";
import './Boards.scss'
import FirstNav from "./firstNav/FirstNav";
import SecondNav from "./secondNav/SecondNav";
import {NavLink} from "react-bootstrap";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";

const Boards = (props) => {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (event) => {
        setInputValue(event.target.value);

    }

    const showInputName = () => {
        setShowInput(!showInput);
        console.log(inputValue);
    }

    if (showInput === false) {
        return (

            <React.Fragment>

                <FirstNav/>
                <SecondNav/>

                <div className="containerTodo">

                    <div className="firstAddTodo">
                        <NavLink onClick={showInputName}><BiIcons.BiAddToQueue/>
                            <span>Añadir otra Lista</span></NavLink>

                    </div>


                </div>

            </React.Fragment>

        )

    } else {
        return (

            <React.Fragment>

                <FirstNav/>
                <SecondNav/>

                <div className="containerTodo">

                    <div className="inputTodo">
                        <input className="inputAddTodo" type="text" placeholder="Nombre de la Tarea" onChange={(event => onChangeInput(event))}/>
                        <NavLink onClick={showInputName}><TiIcons.TiTickOutline/></NavLink>
                        <NavLink onClick={showInputName}><TiIcons.TiCancelOutline/></NavLink>
                    </div>

                </div>

            </React.Fragment>


        )
    }


};

export default Boards;
