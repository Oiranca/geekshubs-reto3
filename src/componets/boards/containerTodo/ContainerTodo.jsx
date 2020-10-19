import React, {useEffect, useState} from "react";
import './ContainerTodo.scss';
import {connect} from 'react-redux';
import {addTodoInList, deleteTodoAction, todoCompleted} from "../../../service/redux/action";
import {DragDropContext} from "react-beautiful-dnd";
import TodoList from "../todoList/TodoList";


const ContainerTodo = (props) => {



  return (

    <React.Fragment>
      <div className="containerTodo" >

       <TodoList/>


      </div>


    </React.Fragment>
  )
};



const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const connected = connect(mapStateToProps)(ContainerTodo);
export default connected;
