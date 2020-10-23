import React, {useEffect, useState} from "react";
import './TodoList.scss'
import {connect} from 'react-redux';
import {
  addTodoInList,
  listContainerOrder

} from "../../../service/redux/action";
import Todo from "../todo/Todo";


// //Estado incial y la nueva lista

const initialDnDStateList = {
  draggedFromList: null,
  draggedToList: null,
  isDraggingList: false,
  originalOrderList: [],
  updatedOrderList: []

}
let newLists = [];

let containerEnter;

const TodoList = (props) => {


  const listToContainer = props.todoList;
  const [listTodo, setListTodo] = useState([]);


  useEffect(() => {


    setListTodo(listToContainer.flat());

  }, [listToContainer]);


  const [dragAndDropList, setDragAndDropList] = useState(initialDnDStateList);

  const onDragStart = (event) => {


    const initialPositionList = Number(event.currentTarget.dataset.position);

    setDragAndDropList({
      ...dragAndDropList,
      draggedFromList: initialPositionList,
      isDraggingList: true,
      originalOrderList: listTodo,
    })


  };


  const onDragOver = (event) => {
//Para coger el id del todlist donde voy hacer drop
    containerEnter = Number(event.currentTarget.id)
    event.preventDefault();
    newLists = dragAndDropList.originalOrderList;
    const draggedFromList = dragAndDropList.draggedFromList;
    const draggedToList = Number(event.currentTarget.dataset.position);
    const itemDraggedList = newLists[draggedFromList];
    const remainingItemsList = newLists.filter((item, index) => index !== draggedFromList);

    // update the list
    newLists = [
      ...remainingItemsList.slice(0, draggedToList),
      itemDraggedList,
      ...remainingItemsList.slice(draggedToList)
    ]

    if (draggedToList !== dragAndDropList.draggedToList) {

      setDragAndDropList({
        ...dragAndDropList,

        updatedOrderList: newLists,
        draggedToList: draggedToList
      })
    }


  };


  const onDrop = (event) => {

    containerEnter = Number(event.currentTarget.id)

    if (!newLists.includes(undefined)) {

      props.orderContainer(newLists)

      setDragAndDropList({
        ...dragAndDropList,
        draggedFromList: null,
        draggedToList: null,
        isDraggingList: false
      });

    }

    containerEnter = '';
  };


  const onKeyUpHandle = (id, event) => {


    if (event.keyCode === 13 && event.target.value.trim()) {
      props.addTodoList(id, event.target.value.trim());
      event.target.value = '';
    }


  }


  return (

    <React.Fragment>


      {

        props.todoList.map(
          (todoLists, index) => (
            <section className="todoList"
                     key={todoLists.id}>
              <div id={todoLists.id} draggable={"true"}
                   onDragStart={onDragStart}
                   onDragOver={onDragOver}
                   onDrop={onDrop} data-position={index}>

                <h4>{todoLists.name}</h4>

                <div className="inputTodo">
                  <input className="inputAddTodo" type="text" placeholder="Nombre de la Tarea"
                         onKeyUp={(event => onKeyUpHandle(todoLists.id, event))}/>


                </div>

              </div>
              <Todo todos={todoLists.todo} idParent={todoLists.id} dropEnter={containerEnter}/>

            </section>

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
    orderContainer: (newOrderListContainer) => listContainerOrder(dispatch, newOrderListContainer),


  });

const connected = connect(mapStateToProps, mapDispatchToProps)(TodoList);


export default connected;
