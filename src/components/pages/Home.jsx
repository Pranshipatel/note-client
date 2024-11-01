import React from 'react'

const Home = () => {
  return (
    <div 
    className="flex items-center justify-center min-h-screen bg-cover bg-center"
>
    <div className="border-zinc-700  rounded-md p-2 gap-2 overflow-hidden bg-white">
        <div className="w-full text-2xl font-bold flex items-center justify-center p-3">
            <h1>Get started to create notes📔📔</h1>
        </div>
        <div className="flex flex-col gap-2 p-3">
            <button
                onClick={() => window.location.href = '/note'}
                className='bg-black text-white py-3 rounded-md w-full'
            >
                Get Started
            </button>
        </div>
    </div>
</div>
      
    
  )
}

export default Home
