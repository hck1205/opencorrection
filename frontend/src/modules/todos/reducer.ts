import { TodosState, TodosAction } from './types';

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추됩니다.
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        // payload 가 number 인 것이 유추됩니다.
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      // payload 가 number 인 것이 유추됩니다.
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
