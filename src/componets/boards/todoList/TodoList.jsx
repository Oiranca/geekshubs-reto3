import React from "react";
import './TodoList.scss'
import {connect} from 'react-redux';
import {addTodoInList, deleteTodoAction, todoCompleted} from "../../../service/redux/action";
import Todo from "../todo/Todo";
import {Droppable} from "react-beautiful-dnd";

const TodoList = (props) => {


  const onKeyUpHandle = (id, event) => {


    if (event.keyCode === 13 && event.target.value.trim()) {
      props.addTodoList(id, event.target.value.trim());
      event.target.value = '';
    }


  }


  return (

    <React.Fragment>


        {

          (props.todoList).map(
            (todoLists) => (

              <div className="todoList" key={todoLists.id}>

                <h4>{todoLists.name}</h4>

                <div className="inputTodo">
                  <input className="inputAddTodo" type="text" placeholder="Nombre de la Tarea"
                         onKeyUp={(event => onKeyUpHandle(todoLists.id, event))}/>


                </div>

                <Todo todos={todoLists.todo} idParent={todoLists.id}/>
              </div>


            )
          )}





    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const mapDispatchToProps = (dispatch) =>
  // atento porque mapDispatchToProps debe devolver un objeto
  ({
    addTodoList: (id, name) => addTodoInList(dispatch, id, name),
    delete: (id, todoContainer) => deleteTodoAction(dispatch, id, todoContainer),
    completed: (id, todoContainer) => todoCompleted(dispatch, id, todoContainer),
  });

const connected = connect(mapStateToProps, mapDispatchToProps)(TodoList);


export default connected;
