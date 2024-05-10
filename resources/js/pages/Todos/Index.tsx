import React from 'react';
import Layout from '@/layouts/Layout';
import { Todo } from '@/types';
import Modal from '@/components/common/Modal';
import TodoForm from '@/components/TodoForm';
import Button from '@/components/common/Button';

interface Props {
    todos: Todo[];
}

export default function TodosIndex({ todos }: Props) {
    const [modalOpen, setModalOpen] = React.useState(false);

    return (
        <Layout>
            <div className="container mt-12 mb-24">
                <div className="flex flex-col gap-12">
                    <Button
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                        className="mr-auto"
                    >
                        Add ToDo
                    </Button>

                    {/* BRIEF: Your code here */}
                    <ul>
                        {todos.map(todo => (
                        <li
                            key={todo.id}
                            className={`flex justify-between items-center mb-2 ${todo.completed ? 'line-through' : ''}`}
                        >
                            <span>{todo.title}</span>
                            <div>
                            <button
                                className={`mr-2 ${todo.completed ? 'text-green-500' : 'text-gray-500'}`}
                                // onClick={() => handleToggleTodo(todo.id)}
                            >
                                {todo.completed ? 'Completed' : 'Mark Complete'}
                            </button>
                            <button
                                className="text-red-500"
                                // onClick={() => handleDeleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <TodoForm closeModal={() => setModalOpen(false)} />
            </Modal>
        </Layout>
    );
}
