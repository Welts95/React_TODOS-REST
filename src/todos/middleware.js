import {
  addTodo,
  DELETE_TODO,
  replaceTodos,
  REQUEST_ADD_TODO,
  REQUEST_TODOS,
  REQUEST_UPDATE_TODO,
  updateTodo,
} from "./actions";
import { deleteTodo, getTodos, postNewTodo, postUpdateTodo } from "./todosApi";

export const todosMiddleare = (store) => (next) => async (action) => {
  next(action);

  switch (action.type) {
    case REQUEST_TODOS: {
      const todos = await getTodos();
      store.dispatch(replaceTodos(todos));
      break;
    }
    case REQUEST_ADD_TODO: {
      const todo = await postNewTodo(action.todo);
      store.dispatch(addTodo(todo));
      break;
    }
    case REQUEST_UPDATE_TODO: {
      const todo = await postUpdateTodo(action.todo);
      store.dispatch(updateTodo(todo));
      break;
    }
    case DELETE_TODO: {
      const todo = await deleteTodo(action.todo);
      store.dispatch(updateTodo(todo));
      break;
    }
    default:
      break;
  }
};
