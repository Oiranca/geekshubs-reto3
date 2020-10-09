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

const todoCompleted = (dispatch, id, idTodoList) =>
  dispatch({
      type: 'COMPLETE_TODO',
      payload: {
          todoId:id,
          todoListId: idTodoList,
      }
  });

export {addTodoList, deleteTodoAction, addTodoInList, todoCompleted};
