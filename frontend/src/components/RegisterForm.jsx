import React, { useState } from 'react';

const RegisterForm = ({state}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    // Add register logic here (API call)
    setTimeout(() => {
      setLoading(false);
      setSuccess('Account created successfully!');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Register'}
        </button>
        {/* Already have account link */}
        <div className="text-center mt-2">
          <span className="text-gray-600">Already have an account?</span>
          <span
            onClick={()=>state(false) }
            className="text-green-600 underline ml-2 cursor-pointer hover:text-green-800"
          >
            Login
          </span>
        </div>
        {error && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded shadow text-center">{error}</div>
        )}
        {success && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded shadow text-center">{success}</div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
