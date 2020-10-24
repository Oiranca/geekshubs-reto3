import React, {useState} from "react";
import './Todo.scss'
import {connect} from 'react-redux';
import {deleteTodoAction, listTodosOrder, moveTodo, todoCompleted} from "../../../service/redux/action";
import {NavLink} from "react-bootstrap";
import * as TiIcons from 'react-icons/ti';
import * as RiIcons from 'react-icons/ri';


const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []

}
let newList;
let parentFrom;
let idTodoToMove;


const Todo = (props) => {

  let list;

  const searchTodoInList = (idParent) => {
    const searchParent = props.todoList.find(todoInParent => todoInParent.id === idParent);

    list = searchParent.todo;

  }


  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);


  const onDragStart = (event) => {
    searchTodoInList(props.idParent);
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    })
    parentFrom = props.idParent;
    idTodoToMove = Number(event.currentTarget.id);

  };

  const onDragOver = (event) => {

    event.preventDefault();

    newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);

    // update the list
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)
    ]


    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,

        // save the updated list state
        // we will render this onDrop
        updatedOrder: newList,
        draggedTo: draggedTo
      })
    }


  };



  const onDrop = (event) => {


    if (props.idParent === parentFrom) {

      props.order(parentFrom, newList)
      setDragAndDrop({
        ...dragAndDrop,
        draggedFrom: null,
        draggedTo: null,
        isDragging: false

      });



    } else {

      const idToDrop = event.currentTarget.dataset.parent;
      props.moveTodo(parentFrom, idToDrop, idTodoToMove);

      idTodoToMove = '';

    }
  };


  const onDragEnd = (event) => {


    if (props.dropEnter!==undefined && props.dropEnter !== '' && event.currentTarget.id!==undefined) {

      props.moveTodo(props.idParent, props.dropEnter, event.currentTarget.id);

    }

  }

  return (

    <React.Fragment>


      {


        props.todos.map((a, index) => (
            <div className="todo" key={a.idTodo} id={a.idTodo} draggable={"true"} onDragStart={onDragStart}
                 onDragOver={onDragOver}

                 onDrop={onDrop} onDragEnd={onDragEnd} data-position={index} data-parent={props.idParent}>
              <h4>{a.name}</h4>
              <div className="navTodo">

                <NavLink onClick={() => props.completed(a.idTodo, props.idParent)}>
                  <span>{!a.stateTodo ? <TiIcons.TiTickOutline/> : <TiIcons.TiTick/>}</span>
                </NavLink>
                <NavLink onClick={() => props.delete(a.idTodo, props.idParent)}>
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
    order: (id, newOrderList) => listTodosOrder(dispatch, id, newOrderList),
    moveTodo: (idContainerLeave, idContainerEnter, idTodo) => moveTodo(dispatch, idContainerLeave, idContainerEnter, idTodo)

  });

const connected = connect(mapStateToProps, mapDispatchToProps)(Todo);


export default connected;
