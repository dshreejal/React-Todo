import React from 'react'
import Card from './Card'

const Tasks = ({ tasks, onDelete, onComplete }) => {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className='w-full max-w-[720px] mx-auto mt-24 px-10 md:px-4'>
            <header className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-2'>
                    <p className='text-[#4EA8DE] text-sm font-bold'>Created tasks</p>
                    <span className='text-[#D9D9D9] bg-[#4EA8DE] px-2 py-1 rounded-full font-bold text-xs '>{tasksQuantity}</span>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='text-[#8284FA] text-sm font-bold'>Completed tasks</p>
                    <span className='text-[#D9D9D9] bg-[#8284FA] px-2 py-1 rounded-full font-bold text-xs '>{completedTasks} of {tasksQuantity}</span>
                </div>
            </header>

            <div className='flex flex-col gap-3'>
                {tasks.map((task) => (
                    <Card key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
                ))}
            </div>
        </section>
    )
}

export default Tasks