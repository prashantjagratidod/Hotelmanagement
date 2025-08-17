import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate()

    function SignUp()
    {
        navigate('/SignUp');
    }
  return (
    <header className="sticky top-0 z-50 p-4 mx-2 bg-white shadow-md border-b-2 flex justify-between items-center">
      
      <div className="flex-shrink-0">
        <a href="/" className="text-2xl font-bold text-gray-800">PrashantjagratiHotel</a>
      </div>

      
      <nav className="flex items-center space-x-4">
        <button className="px-4 py-2 text-gray-600 rounded-full hover:bg-gray-200">Home</button>
        <button className="px-4 py-2 text-gray-600 rounded-full hover:bg-gray-200">Rooms</button>
        <button className="px-4 py-2 text-gray-600 rounded-full hover:bg-gray-200">About Us</button>
        <button className="px-4 py-2 text-gray-600 rounded-full hover:bg-gray-200">Contact Us</button>
      </nav>

    
      <div className="flex items-center space-x-4">
        
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">Login</button>
        <button onClick={SignUp} className="px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50">Sign Up</button>
        
      </div>
    </header>
  );
}