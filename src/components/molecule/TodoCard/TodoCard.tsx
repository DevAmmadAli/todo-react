import React from 'react';
import Card from '../Card';
import Button from '../../atom/Button';
import { Todo } from '../../../types';

interface TodoCardProps {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onDelete: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onEdit, onDelete }) => {
    return (
        <div className="col-12 md-4">
            <Card heading={{ title: todo.title, color: 'white' }}>
                <p>{todo.description}</p>
                <p>Status: {todo.status ? 'Completed' : 'Pending'}</p>
                <p>Due Date: {new Date(todo.dueDate).toLocaleDateString()}</p>
                <div className="flex gap-4">
                    <Button
                        label="Edit"
                        icon="pi pi-pencil"
                        onClick={() => onEdit(todo)}
                    />
                    <Button
                        label="Delete"
                        icon="pi pi-trash"
                        onClick={() => onDelete(todo.id)}
                        isDangerBtn={true}
                    />
                </div>
            </Card>
        </div>
    );
};

export default TodoCard;
