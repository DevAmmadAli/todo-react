import React, { useState, useEffect } from 'react';
import TodoTemplate from '../../templates/TodoTemplate';
import { Todo } from '../../types';
import Header from '../../components/molecule/Header';
import Footer from '../../components/molecule/Footer';
import styles from './TodoPage.module.scss';
import { useLoading, useToast } from '../../contexts';
import axiosInstance from '../../interceptors/axios';
import { toastMessages } from '../../components/atom/ToastNotification';

const TodoPage: React.FC = () => {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<any | null>(null);
    const { showToast } = useToast();
    const { setLoading } = useLoading();

    useEffect(() => {
        handleGetTodo();
    }, []);

    const handleGetTodo = async () => {
        try {
            setLoading(true);

            const response = await axiosInstance.get('todo');

            setTodos(response.data ?? []);
        } catch (error) {
            showToast(toastMessages.error('Error while loading todo!'));
        } finally {
            setLoading(false);
        }
    };

    const handleAddTodo = () => {
        setCurrentTodo(null);
        setDialogVisible(true);
    };

    const handleEditTodo = (todo: Todo) => {
        setCurrentTodo(todo);
        setDialogVisible(true);
    };

    const handleDeleteTodo = async (id: number) => {
        try {
            setLoading(true);

            await axiosInstance.delete(`todo/${id}`);

            showToast(toastMessages.success('Todo deleted successfully!'));

            handleGetTodo();
        } catch (error) {
            showToast(toastMessages.error('Error while deleting todo!'));
        } finally {
            setLoading(false);
        }
    };

    const handleSaveTodo = async (formData: Todo) => {
        try {
            setLoading(true);

            if (currentTodo?.id) {
                await axiosInstance.put(`todo/${currentTodo.id}`, formData);
            } else {
                await axiosInstance.post('todo', formData);
            }

            showToast(
                toastMessages.success('Todo created/ updated successfully!')
            );

            setDialogVisible(false);

            handleGetTodo();
        } catch (error) {
            showToast(
                toastMessages.error('Error while creating/ updating todo!')
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <Header logoUrl="/logo512.png" alt="logo" />
            <div className={styles.todo}>
                <TodoTemplate
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onEditTodo={handleEditTodo}
                    onSaveTodo={handleSaveTodo}
                    isDialogVisible={isDialogVisible}
                    setDialogVisible={setDialogVisible}
                    currentTodo={currentTodo}
                    handleAddTodo={handleAddTodo}
                />
            </div>

            <Footer data={'All rights reserved | 2024'} />
        </div>
    );
};

export default TodoPage;
