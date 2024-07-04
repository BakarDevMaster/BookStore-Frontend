// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link} from 'react-router-dom';
import Login from './Login';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem('user', JSON.stringify(responseData.user));
      alert('Successfully signed up');
      document.getElementById("my_modal_3").showModal();
      // navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  // Watch password confirmation to validate
  const password = watch("password", "");
  // eslint-disable-next-line no-unused-vars
  const passwordConfirmation = watch("password_confirmation", "");

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?t=st=1719916047~exp=1719919647~hmac=dfc05175fe7b62ed57f5f565a45a0d9dde5262c54b43a33b8806ef1ec2185752&w=740"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-pink-600 sm:text-3xl md:text-4xl">
                Welcome to BookStore 🦑
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>
          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-10 text-xl font-bold text-pink-600 sm:text-3xl md:text-4xl">
                  Welcome to BookStore 🦑
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                  quibusdam aperiam voluptatum.
                </p>
              </div>
              <Link to="/" className='bg-pink-500 hover:bg-pink-700 rounded-lg py-2 px-3 text-white'>Back</Link>
              <form action="#" onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    {...register("first_name", { required: true })}
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.first_name && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.last_name && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
                  <div className="relative">
                    <input
                      {...register("password", { required: true })}
                      type={showPassword ? "text" : "password"}
                      id="Password"
                      name="password"
                      className="mt-1 w-full border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center justify-center px-3 bg-gray-200 text-gray-500 hover:bg-gray-300 rounded-r-md focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 19a9 9 0 100-18 9 9 0 000 18z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M5.05 10.354a4.5 4.5 0 115.293-5.293l1.06 1.06a6 6 0 10-7.704 7.704l1.06 1.06zm1.767-1.768l1.06 1.06a2.5 2.5 0 11-3.182-3.182l1.06 1.06zm3.182 3.182l-1.06-1.06a2.5 2.5 0 11-3.182-3.182l-1.06-1.06a4.5 4.5 0 015.293 5.293z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 19a9 9 0 100-18 9 9 0 000 18z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4.5 10a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                  </label>
                  <input
                    {...register("password_confirmation", {
                      required: true,
                      validate: value => value === password || "The passwords do not match"
                    })}
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {errors.password_confirmation && <span className='text-red-500 text-sm'>{errors.password_confirmation.message}</span>}
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type='submit'
                    className="inline-block shrink-0 rounded-md border border-pink-500 bg-pink-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-500 focus:outline-none focus:ring active:text-pink-500"
                  >
                    Create an account
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  )
};

export default Signup;
