import React from 'react';
import logo from '../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
const Header = ({ handleAddTask }) => {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }
    return (
        <header className='bg-[#0D0D0D] flex items-center justify-center h-52 relative'>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit} className='absolute h-14 bottom-[-27px] w-full max-w-[736px] flex gap-2 px-12 md:px-4'>
                <input onChange={onChangeTitle} value={title} placeholder='Add a new task' type='text' className='h-full flex-[1] text-[#fff] bg-[#262626] border-[#0d0d0d] rounded-lg px-4 text-base placeholder:text-gray-500' />
                <button className='h-full px-4 bg-[#1E6F9F] text-white border-none rounded-lg flex items-center gap-2 font-bold text-xs'>Add <AiOutlinePlusCircle size={20} /> </button>
            </form>
        </header>
    )
}

export default Header