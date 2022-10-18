import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleOpenRoom = () => {
        navigate('/room')
    }

    return ( 
    <div className='flex flex-col box-content flex-1 h-screen w-screen items-center justify-start h-100 w-100 bg-gray-900'>
        <div className='flex flex-col items-center justify-center p-10 m-10 rounded-md bg-emerald-800 border-emerald-600 border-2'>
            <h1 className='font-mono text-4xl text-white antialiased whitespace-nowrap font-bold my-5'>
                Clique para criar sua sala!
            </h1>
{/*             <input 
                type="text" 
                name="name" 
                className='rounded-md p-1 m-2 text-black text-center outline-none' 
                value={value}
                placeholder='Insira o nome da sala'/> */}
            <button
            onClick={handleOpenRoom}
                className='m-6 rounded-md px-5 py-2 font-bold bg-emerald-600 border-emerald-400 border-2 text-white hover:bg-emerald-500'
            >
                Criar Sala
            </button>
        </div>
    </div>
     );
}
 
export default Home;