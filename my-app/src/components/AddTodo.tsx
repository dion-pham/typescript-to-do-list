import React, { useState } from "react";

// difference between interface and props?? compare to TodoItem.tsx
interface Props {
    saveTodo: (formData: ITodo) => void;
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
    const [formData, setFormData] = useState<ITodo>({
        _id: "",
        name: "",
        description: "",
        status: false,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        saveTodo(formData);
        setFormData({
            _id: "",
            name: "",
            description: "",
            status: false,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Todo name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Todo description"
                value={formData.description}
                onChange={handleInputChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;
