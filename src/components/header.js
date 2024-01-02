import React from 'react';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <header className="flex justify-center mt-5 space-x-5">
      <h1 className="font-black text-xl">Todo List</h1>
      <ModeToggle />
    </header>
  );
};

export default Header;
