import React from "react";
import './Todo.scss'
import {connect} from 'react-redux';
import {addTodoInList, deleteTodoAction, todoCompleted} from "../../../service/redux/action";
import {NavLink} from "react-bootstrap";
import * as TiIcons from 'react-icons/ti';
import * as RiIcons from 'react-icons/ri';


const Todo = (props) => {




  return (

    <React.Fragment>


        {




                (props.todos).map((a) => (
                    <div className="todo" key={a.idTodo}>
                      <h4>{a.name}</h4>
                      <div className="navTodo">

                        <NavLink onClick={() => props.completed(a.idTodo, props.idParent)}>
                          <span>{!a.stateTodo ? <TiIcons.TiTickOutline/> : <TiIcons.TiTick/>}</span>
                        </NavLink>
                        <NavLink onClick={() => props.delete(a.idTodo,props.idParent)}>
                          <RiIcons.RiDeleteBin6Fill/>
                        </NavLink>

                      </div>
                    </div>
                  )
                )




          }





    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const mapDispatchToProps = (dispatch) =>
  // atento porque mapDispatchToProps debe devolver un objeto
  ({
      delete: (id, todoContainer) => deleteTodoAction(dispatch, id, todoContainer),
    completed: (id, todoContainer) => todoCompleted(dispatch, id, todoContainer),
  });

const connected = connect(mapStateToProps, mapDispatchToProps)(Todo);


export default connected;
