import React from 'react';
import { Todo } from 'modules/todos';
import TodoItem from './child/TodoItem';
import TodoInsert from './child/TodoInsert';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onInsert: (text: string) => void;
};

function Presenter({ todos, onToggle, onRemove, onInsert }: TodoListProps) {
  return (
    <>
      <TodoInsert onInsert={onInsert} />
      {todos.length === 0 ? (
        <p>등록된 항목이 없습니다.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
              key={todo.id}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default Presenter;
