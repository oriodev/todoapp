import Header from '@/components/header';
import NewTodo from '@/components/new-todo';
import RenderTodos from '@/components/render-todos';
import { CheckboxWithText } from '@/components/ui/checkbox-with-text';

import { fakedata } from '@/lib/fakedata';

import React from 'react';

export default function Home() {
  const todos = fakedata.filter((todo) => !todo.status);
  const completeTodos = fakedata.filter((todo) => todo.status);

  return (
    <div>
      <Header />
      <NewTodo />

      <div className="flex flex-col space-y-2 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-auto my-10 px-10">
        <h1>To Do</h1>

        <RenderTodos list={todos} />

        <h1>Completed</h1>

        <RenderTodos list={completeTodos} />
      </div>
    </div>
  );
}
