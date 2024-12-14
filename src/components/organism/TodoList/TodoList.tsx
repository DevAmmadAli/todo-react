import React from 'react';
import TodoCard from '../../molecule/TodoCard';

interface TodoListProps {
    todos: any[];
    onDelete: (id: number) => void;
    onEdit: (todo: any) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
    return (
        <div className="grid">
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;
