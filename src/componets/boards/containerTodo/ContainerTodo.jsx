import React from "react";
import './ContainerTodo.scss';
import {connect} from 'react-redux';
import {addTodoInList, deleteTodoAction, todoCompleted} from "../../../service/redux/action";
import {DragDropContext} from "react-beautiful-dnd";
import TodoList from "../todoList/TodoList";


const ContainerTodo = () => {

  ondragend=result=>{

  }


  return (

    <React.Fragment>
      <div className="containerTodo" onDragEnd={ondragend}>

       <TodoList/>


      </div>


    </React.Fragment>
  )
};






export default ContainerTodo;
