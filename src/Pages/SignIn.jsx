import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { loading, error} = useSelector((state) => state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
         setFormData({...formData, [e.target.id]: e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // setLoading(true);
            // setError(false)
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data)
            // setLoading(false);
            if (data.success === false) {
              // setError(true);
              dispatch(signInFailure(data))
              return; 
            }
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error){
            // setLoading(false);
            // setError(true)
            dispatch(signInFailure(error))

        }
    }

  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type='email' placeholder='Email'
            id='email' className='bg-green-100 p-3 rounded-lg' onChange={handleChange}/>
            <input type='password' placeholder='Password'
            id='password' className='bg-green-100 p-3 rounded-lg' onChange={handleChange}/>

            <button disabled={loading} className='bg-pink-500 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80'>{loading? 'Loading': 'Sign in'}</button>
        </form>
        <div className='flex gap-2 mt-5'>
            <p>Don't have an account</p>
            <Link to="/sign-up"> 
            <span className='text-blue-500'>Sign up</span>
            </Link>
        </div>
        <p className='mt-5 text-red-800'>
        {error ? error.message || "Something went wrong" : ''}
        </p>
    </div>
  )
}



export default SignIn