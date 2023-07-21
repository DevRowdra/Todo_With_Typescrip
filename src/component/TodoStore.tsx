// import React from 'react';
import { createContext, ReactNode, useState } from 'react';
export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodoContext = {
  todo: Todo[];
  handleAddTodo: (task: string) => void;
};
export const TodoContext = createContext<TodoContext | null>(null);
const TodoStore = ({ children }: TodosProviderProps) => {
    const[todo,setTodo]=useState<Todo[]>([])
    const handleAddTodo=(task)=>{
setTodo()
    }
  return (
    <TodoContext.Provider value={{ Todo, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
