import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

const Card = ({ task, onDelete, onComplete }) => {
    return (
        <div className='w-full bg-[#262626] border-solid border-[#333333] p-4 rounded-lg flex items-center justify-between gap-12'>
            <button className='checkContainer' onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? 'text-sm mr-auto text-[#808080] line-through' : 'text-sm mr-auto text-[#F2F2F2]'}>
                {task.title}
            </p>

            <button className='text-[#808080]' onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}

export default Card