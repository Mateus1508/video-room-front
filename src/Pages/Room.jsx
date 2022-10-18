import React, { useRef, useState } from 'react';

const VideoRoom = () => {
    const inputRef = useRef();
    const [source, setSource] = useState();

    let random = Math.floor(Math.random() * (100 - 1) + 1);

    const handleChangeInput = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    }

    const handleVideoChoosen = () => {
        inputRef.current.click();
    }
    return ( 
        <div className='flex flex-col box-content flex-1 h-screen w-screen items-center justify-center h-100 w-100 bg-gray-900'>
            <h1 className='text-white text-6xl m-10'>Sala {random}</h1>
            
            <input 
                ref={inputRef}
                className='flex flex-col items-center justify-center p-10 rounded-md bg-emerald-800 border-emerald-600 border-2'
                type="file" 
                name="video" 
                accept='.mov,.mp4'
                onChange={handleChangeInput}
                />   
            {source && (
                <video 
                src={source}
                className='w-6/12 h-6/12 m-5'
                width='100%'
                height='100%'
                controls
                />
            )}
        </div>
     );
}
 
export default VideoRoom;