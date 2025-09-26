import { useState } from 'react';
import { createShortUrl } from '../apies/shortUrl.api'
// import { useQueryClient } from '@tanstack/react-query';
// import { useMutation, useQuery } from '@tanstack/react-query';

const UrlForm = () => {
  const [url, setUrl] = useState(" ");
  const [shortUrl, setShortUrl] = useState()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    setError('');
  //   setShortUrl('');
    const shorturl = await createShortUrl(url)
    setShortUrl(shorturl)
  }

  // Queries - for backend to frontend
  // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })


  // Mutations - for frontend to backend
  // const mutation = useMutation({
  //   mutationFn: handleSubmit,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })
  


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md flex flex-col gap-4">
        <input
          type="url"
          placeholder="Enter your long URL..."
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <button
          type="submit"
          className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
          disabled={loading}
        >
           {loading ? 'Shortening...' : 'Shorten URL'}
        </button>

        {shortUrl && (
        <div className="mt-6 bg-green-100 text-green-800 px-4 py-2 rounded shadow">
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="underline">{shortUrl}</a>
        </div>
      )}
      {error && (
        <div className="mt-4 bg-red-100 text-red-800 px-4 py-2 rounded shadow">
          {error}
        </div>
      )}
    </form>

    
  )
}

export default UrlForm