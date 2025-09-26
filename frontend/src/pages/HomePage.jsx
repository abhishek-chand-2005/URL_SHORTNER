import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
   <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
            <h1 className="text-3xl font-bold mb-6 text-pink-700">URL Shortener</h1>
        
            <UrlForm/>
        </div>
   </div>
  )
}

export default HomePage