import React from 'react';
import { Dialog } from 'primereact/dialog';
import TodoList from '../../components/organism/TodoList';
import TodoForm from '../../components/organism/TodoForm';
import Button from '../../components/atom/Button';
import styles from './TodoTemplate.module.scss';

interface TodoPageTemplateProps {
    todos: any[];
    onDeleteTodo: (id: number) => void;
    onEditTodo: (todo: any) => void;
    onSaveTodo: (formData: any) => void;
    isDialogVisible: boolean;
    setDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    currentTodo: any | null;
    handleAddTodo: () => void;
}

const TodoPageTemplate: React.FC<TodoPageTemplateProps> = ({
    todos,
    onDeleteTodo,
    onEditTodo,
    onSaveTodo,
    isDialogVisible,
    setDialogVisible,
    currentTodo,
    handleAddTodo,
}) => {
    return (
        <div>
            <header className="header">
                <h1>Todo List</h1>
                <p>Manage your todos efficiently</p>
                <Button
                    label="Add Todo"
                    icon="pi pi-plus"
                    onClick={handleAddTodo}
                    className="p-button-primary"
                />
            </header>

            <div className={styles.todoListContainer}>
                <TodoList
                    todos={todos}
                    onEdit={onEditTodo}
                    onDelete={onDeleteTodo}
                />
            </div>

            <Dialog
                style={{ width: '50vw' }}
                visible={isDialogVisible}
                onHide={() => setDialogVisible(false)}
                header={currentTodo ? 'Edit Todo' : 'Add Todo'}
                draggable={false}
            >
                <TodoForm todo={currentTodo} onSave={onSaveTodo} />
            </Dialog>
        </div>
    );
};

export default TodoPageTemplate;
