import React, {useEffect, useState} from "react";
import './Todo.scss'
import {connect} from 'react-redux';
import {deleteTodoAction, listTodosOrder, todoCompleted} from "../../../service/redux/action";
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

const Todo = (props) => {


  const lists = props.todoList;
  const [list, setList] = useState([]);


  useEffect(() => {


    setList(lists.map((list) => list.todo).flat());

  }, [props.todoList])


  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);


  const onDragStart = (event) => {


    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    })


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

        updatedOrder: newList,
        draggedTo: draggedTo
      })
    }

  };

  const onDrop = () => {

    props.order(props.idParent,newList)

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  };


  return (

    <React.Fragment>


      {


        props.todos.map((a, index) => (
            <div className="todo" key={a.idTodo} draggable={"true"} onDragStart={onDragStart} onDragOver={onDragOver}
                 onDrop={onDrop} data-position={index}>
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
  });

const connected = connect(mapStateToProps, mapDispatchToProps)(Todo);


export default connected;
