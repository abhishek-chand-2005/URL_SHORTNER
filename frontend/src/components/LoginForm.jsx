import { useState } from 'react';
import { loginUser } from '../apies/user.api.js';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';

const LoginForm = ({state}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  console.log(auth)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Add login logic here (API call)
     try {
            const data = await loginUser(email, password);
            dispatch(login(data.user))
            navigate({to:"/dashboard"})
            setLoading(false);
            console.log("signin success")
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Login failed. Please check your credentials.');
        }
    setTimeout(() => {
      setLoading(false);
      // Simulate error for demo
      // setError('Invalid credentials');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded shadow text-center">{error}</div>
        )}
        {/* Register link */}
        <div className="text-center mt-2">
          <span className="text-gray-600">Don't have an account? </span>
          <span onClick={()=>{state(true)}} className="text-blue-600 underline ml-2">Register</span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
