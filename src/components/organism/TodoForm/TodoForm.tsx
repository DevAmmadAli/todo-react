import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import Button from '../../atom/Button';
import { Todo } from '../../../types';

interface TodoFormProps {
    todo?: Todo;
    onSave: (formData: any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ todo, onSave }) => {
    const [formData, setFormData] = useState({
        title: todo ? todo.title : '',
        description: todo ? todo.description : '',
        dueDate: todo ? todo.dueDate : null,
    });

    useEffect(() => {
        if (todo) {
            setFormData({
                title: todo.title,
                description: todo.description,
                dueDate: new Date(todo.dueDate),
            });
        }
    }, [todo]);

    const handleChange = (e: any): any => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-fluid">
            <div>
                <label htmlFor="title">Title</label>
                <div className="mt-1">
                    <InputText
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        name="title"
                        required
                    />
                </div>
            </div>

            <div className="mt-2">
                <label htmlFor="description">Description</label>
                <div className="mt-1">
                    <InputTextarea
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        name="description"
                        rows={4}
                        required
                    />
                </div>
            </div>

            <div className="mt-2">
                <label htmlFor="dueDate">Due Date</label>
                <div className="mt-1">
                    <Calendar
                        id="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        name="dueDate"
                        required
                    />
                </div>
            </div>

            <div className="mt-4">
                <div className="p-col-12 p-md-9 p-offset-md-3">
                    <Button
                        label="Save Todo"
                        type="submit"
                        className="p-button-lg p-button-success"
                    />
                </div>
            </div>
        </form>
    );
};

export default TodoForm;
