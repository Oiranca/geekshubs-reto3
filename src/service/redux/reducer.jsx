const initialState = {
  todoList: []
};


const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_TODO_LIST':
      state.todoList.push({
        name: action.payload,
        id: action.id,
        todo: [],

      });
      break;

    case 'ADD_TODO':

      return {
        todoList: state.todoList.map(
          (todoContainer) => {

            if (todoContainer.id === action.payload) {


              todoContainer.todo = [
                ...todoContainer.todo,
                {
                  name: action.name,
                  idTodo: action.idTodo,
                  stateTodo: action.state
                }]
            }

            return todoContainer;
          },
        ),
      };

    case 'DELETE_TODO':


      const list = state.todoList.find(itemTodo => itemTodo.id === action.payload.todoListId);

      if (list) {


        list.todo = list.todo.filter(deleteTodo => deleteTodo.idTodo !== action.payload.todoId);


      }

      break;

    case 'COMPLETE_TODO':

      const listTodo = state.todoList.find(itemTodo => itemTodo.id === action.payload.todoListId);

      if (listTodo) {

        const todoToComplete = listTodo.todo.find(completeTodo => completeTodo.idTodo === action.payload.todoId)

        todoToComplete.stateTodo = !todoToComplete.stateTodo


      }

      break;

    case 'ORDER_TODO':

      return {
        todoList: state.todoList.map(
          (todoContainer) => {

            if (todoContainer.id === action.payload.parentId) {


              todoContainer.todo = action.payload.order


            }

            return todoContainer;
          },
        ),
      };
    case 'LIST_CONTAINER':


      state.todoList = action.payload.orderList

      break;

    case 'MOVE_TODO':


      const listForRemove = state.todoList.find(itemTodo => itemTodo.id === Number(action.payload.idContainerLeave));

      if (listForRemove) {

        const todoToMove = listForRemove.todo.find(moveTodo => moveTodo.idTodo === Number(action.payload.idTodoToMove))

        const listToMove = state.todoList.find(itemForMove => itemForMove.id === Number(action.payload.idContainerEnter))

        if (Number(action.payload.idContainerLeave) !== Number(action.payload.idContainerEnter)) {


          listForRemove.todo = listForRemove.todo.filter(removeTodo => removeTodo.idTodo !== Number(action.payload.idTodoToMove))
          listToMove.todo.push(todoToMove);
        }

      }


      break;

    default:
      return state;
  }

  return {
    todoList: [...state.todoList]
  };

};

export default reducer;


