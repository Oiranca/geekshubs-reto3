import React, {useState} from "react";
import './Boards.scss'
import FirstNav from "./firstNav/FirstNav";
import SecondNav from "./secondNav/SecondNav";
import {NavLink} from "react-bootstrap";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";
import ContainerTodo from "./containerTodo/ContainerTodo";
import {connect} from "react-redux";
import {addTodoList} from "../../service/redux/action";


const Boards = (props) => {

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (event) => {
    setInputValue(event.target.value);

  }

  const showInputName = () => {
    if (inputValue !== '') {
      props.addTodo(inputValue);
      setInputValue('');
    }
    setShowInput(!showInput);
    setInputValue('');

  }

  if (showInput === false) {
    return (

      <React.Fragment>

        <FirstNav/>
        <SecondNav/>

        <div className="addContainerTodo">

          <div className="firstAddTodo">
            <NavLink onClick={showInputName}><BiIcons.BiAddToQueue/>
              <span>Añadir Lista</span></NavLink>

          </div>


        </div>
        <ContainerTodo/>

      </React.Fragment>

    )

  } else {

    return (

      <React.Fragment>

        <FirstNav/>
        <SecondNav/>

        <div className="addContainerTodo">
          <div className="listTodo">


          </div>
          <div className="inputTodo">
            <input className="inputAddTodo" type="text" placeholder="Nombre de la Tarea"
                   onChange={(event => onChangeInput(event))}/>
            <NavLink onClick={showInputName}><TiIcons.TiTickOutline/></NavLink>
            <NavLink onClick={showInputName}><TiIcons.TiCancelOutline/></NavLink>
          </div>


        </div>

        <ContainerTodo/>
      </React.Fragment>


    )
  }


};

const mapDispatchToProps = (dispatch) =>
  // atento porque mapDispatchToProps debe devolver un objeto
  ({
    addTodo: addTodoList(dispatch)
  });


const connected = connect(null, mapDispatchToProps)(Boards);

export default connected;
