import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const NewTodo = () => {
  return (
    <div className="flex space-x-2 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-auto my-10 px-10">
      <Input placeholder="New Todo" />
      <Button>Add</Button>
    </div>
  );
};

export default NewTodo;
