// src/components/pages/Register.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/action/userAction';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {username, email, password}
        dispatch(registerUser(data, navigate));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
            <div className="border-zinc-700 border-[0.1rem] w-[35rem] h-[32rem] rounded-md p-2 gap-2 overflow-hidden bg-white">
                <div className="w-full text-2xl font-bold flex items-center justify-center p-3">
                    <h1>Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 p-3">
                        <label className='text-md  font-semibold' htmlFor="">Username</label>
                        <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='p-3 rounded-md bg-zinc-100 text-gray-800 outline-none'
                        required
                        />
                    </div>
                    <div className="flex flex-col gap-2 p-3">
                        <label className='text-md  font-semibold' htmlFor="">Email</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='p-3 rounded-md bg-zinc-100 text-gray-800 outline-none'
                        required
                        />
                    </div>
                    <div className="flex flex-col gap-2 p-3">
                        <label className='text-md  font-semibold' htmlFor="">Password</label>
                        <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='p-3 rounded-md bg-zinc-100 text-gray-800 outline-none'
                        required
                        />
                    </div>
                    <div className="flex w-full items-center justify-center p-3">
                        <button 
                        type="submit"
                        className='bg-black text-white py-3 rounded-md w-full'
                        >
                            Register
                        </button>
                    </div>
                    <div className="flex w-full items-center justify-center p-3">
                        <Link to={'/login'} className='text-gray-800'>Already have an account, Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
