const addTodoList = (dispatch) => (name) => {

    dispatch({
        type: 'ADD_TODO_LIST',
        payload: name,
        id: Date.now(),
    });
};

const addTodoInList = (dispatch,id,name)=>{

    dispatch({
        type: 'ADD_TODO',
        payload: id,
        name: name,
        state: false,
        idTodo: Date.now(),
    });
};
const deleteTodoAction = (dispatch, id, idTodoList) =>
    dispatch({
        type: 'DELETE_TODO',
        payload: {
            todoId:id,
            todoListId: idTodoList,
        }
    });

const deleteTodoList = (dispatch, id) =>
  dispatch({
    type: 'DELETE_TODOLIST',
    payload: {
      todoListId:id,
    }
  });

const todoCompleted = (dispatch, id, idTodoList) =>
  dispatch({
      type: 'COMPLETE_TODO',
      payload: {
          todoId:id,
          todoListId: idTodoList,
      }
  });
const listTodosOrder = (dispatch, id, list) =>

  dispatch({
    type: 'ORDER_TODO',
    payload: {
      parentId:id,
      order:list
    }
  });

const listContainerOrder = (dispatch, order) =>

  dispatch({
    type: 'LIST_CONTAINER',
    payload:{
      orderList:order}


  });

const moveTodo = (dispatch, idContainerLeave, idContainerEnter, idTodoToMove)=>{
  dispatch({

    type: 'MOVE_TODO',
    payload:{
      idContainerLeave:idContainerLeave,
      idContainerEnter:idContainerEnter,
      idTodoToMove:idTodoToMove,
    }
  });
}

export {addTodoList, deleteTodoAction, deleteTodoList, addTodoInList, todoCompleted,listTodosOrder,listContainerOrder,moveTodo};
