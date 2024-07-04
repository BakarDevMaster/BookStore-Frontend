// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem('user')
        navigate('/signup')
    }

  return (
    <button onClick={handlelogout}  className='text-white font-semibold bg-red-600 rounded-lg px-3 py-2 hover:bg-red-700'>Logout</button>
  )
}

export default Logout