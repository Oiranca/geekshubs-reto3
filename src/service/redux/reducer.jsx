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
      // Encontrar el todoList asociado al todo que vas añadir
      // .find => 1 sola cosa o null
      // .filter => X cosas filtradas por una condición
      // Añadir el todo al todolist
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

    default:
      return state;
  }

  return {
    todoList: [...state.todoList]
  };

};

export default reducer;


