import React from 'react'
import { useForm } from 'react-hook-form';

export default function Hook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
<form onSubmit={handleSubmit((data) => console.log(data))}>
                
      <input {...register('firstName')} className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black mr-3" />
      <input {...register('lastName', { required: true })} className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black" />
      {errors.lastName && <p className="w-96 my-4    backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black">Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black"/>
      {errors.age && <p className="w-96 my-4    backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black">Please enter number for age.</p>}
      <input type="submit" className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white dark:bg-[#444850] light-mode:bg-white light-mode:text-black" />
    </form>
    
    </div>
  )
}
