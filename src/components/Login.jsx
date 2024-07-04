// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [errorMessage, setErrorMessage] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.result || 'Failed to log in');
      }

      alert('Login successfully');
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)} className='dark:text-black'>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mb-4 dark:text-black">Login</h3>
            <div className='dark:text-black'>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <span>Email</span><br />
              <input {...register("email", { required: true })} type="email" placeholder="Email" className="input-text w-80 outline-none border-2 p-2 mt-4 rounded-lg" />
              <br /> {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
              <br /> <span>Password</span><br />
              <input {...register("password", { required: true })} type="password" placeholder="Password" className="input-text outline-none border-2 w-80 p-2 mt-4 rounded-lg" />
              <br /> {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            <div>
              <button type='submit' className=" bg-pink-500 hover:bg-pink-700 mb-2 duration-300 w-80 px-4 py-2 mt-6 rounded-lg">Login</button>
              <br /> <a href="#" className="text-sm dark:text-black ">Not Registered? <Link to={"/signup"} className='text-blue-500 hover:underline hover:text-blue-700'>Signup</Link></a>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
