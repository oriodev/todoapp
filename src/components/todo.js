import React from 'react';
import { CheckboxWithText } from './ui/checkbox-with-text';

const Todo = ({ todo }) => {
  return (
    <div className="bg-secondary p-5">
      <CheckboxWithText text={todo.name} />
    </div>
  );
};

export default Todo;
