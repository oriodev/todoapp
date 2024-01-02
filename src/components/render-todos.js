import React from 'react';
import { CheckboxWithText } from './ui/checkbox-with-text';
import Todo from './todo';

const RenderTodos = ({ list }) => {
  return (
    <div className="flex flex-col space-y-3 py-5">
      {list.map((todo) => (
        <Todo key={todo.name} todo={todo} />
      ))}
    </div>
  );
};

export default RenderTodos;
