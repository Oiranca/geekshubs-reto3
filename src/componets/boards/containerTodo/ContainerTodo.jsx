import React from "react";
import './ContainerTodo.scss';
import {connect} from 'react-redux';
import {addTodoInList, deleteTodoAction, todoCompleted} from "../../../service/redux/action";
import {NavLink} from "react-bootstrap";
import * as TiIcons from 'react-icons/ti';
import * as RiIcons from 'react-icons/ri';


const ContainerTodo = (props) => {


  const onKeyUpHandle = (id, event) => {


    if (event.keyCode === 13 && event.target.value.trim()) {
      props.addTodoList(id, event.target.value.trim());
      event.target.value = '';
    }


  }


  return (

    <React.Fragment>
      <div className="containerTodo">

        {

          (props.todoList).map(
            (todoLists) => (

              <div className="todoList" key={todoLists.id}>

                <h4>{todoLists.name}</h4>

                <div className="inputTodo">
                  <input className="inputAddTodo" type="text" placeholder="Nombre de la Tarea"
                         onKeyUp={(event => onKeyUpHandle(todoLists.id, event))}/>


                </div>

                {(todoLists.todo).map((a) => (
                    <div className="todo" key={a.idTodo}>
                      <h4>{a.name}</h4>
                      <div className="navTodo">

                        <NavLink onClick={() => props.completed(a.idTodo, todoLists.id)}>
                          <span>{!a.stateTodo ? <TiIcons.TiTickOutline/> : <TiIcons.TiTick/>}</span>
                        </NavLink>
                        <NavLink onClick={() => props.delete(a.idTodo, todoLists.id)}>
                          <RiIcons.RiDeleteBin6Fill/>
                        </NavLink>

                      </div>
                    </div>
                  )
                )}
              </div>


            )
          )}


      </div>


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

const connected = connect(mapStateToProps, mapDispatchToProps)(ContainerTodo);


export default connected;
