import React from "react";
import './ContainerTodo.scss';
import TodoList from "../todoList/TodoList";


const ContainerTodo = () => {



  return (

    <React.Fragment>
      <div className="containerTodo" >



       <TodoList/>


      </div>


    </React.Fragment>
  )
};



export default ContainerTodo;
