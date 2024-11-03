import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Landing() {


 

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        {/* Hero section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Discover new worlds</span>{' '}
                    <span className="block text-blue-600 xl:inline">through audiobooks</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Immerse yourself in captivating stories narrated by world-class voice actors. Start your audio journey today.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      

                      <Link to={"/watchlist"}>
          <a
            href=""
            className={` w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10`}
          >
            Get started
          </a>
        </Link>{" "}


                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
             <img src="https://static.voices.com/wp-content/uploads/History-of-Audiobooks.jpg" alt="description" className="w-full sm:w-64 md:w-80 lg:w-96 xl:w-[40rem] h-auto object-cover rounded-lg shadow-lg" />
          </div>


        </div>

        {/* Featured Audiobooks */}
        <div id='land' className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Audiobooks</h2><br /> <br />
       
<div className="flex flex-wrap items-start gap-6 p-6">
    
<a href="https://youtu.be/48L6B0fays4?si=be6qHBFJ_cYvPOwF" className="block max-w-xs w-full md:w-1/4">
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-80 object-cover" src="https://m.media-amazon.com/images/I/71YsOJ728FL._AC_UF1000,1000_QL80_.jpg" alt="Product Image" />
        <div className="p-4">
            <h5 className="text-md font-semibold text-gray-800">GreenLights</h5>
            <div className="mt-4 text-xl font-bold text-gray-900">$25.99</div>
        </div>
        <div className="flex justify-between p-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-3 rounded-lg">Play Now</button>
            
        </div>
    </div>
</a>


<a href="#" className="block max-w-xs w-full md:w-1/4">
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-80 object-cover" src="https://m.media-amazon.com/images/M/MV5BYzM2NGMzNGQtZjNhMi00MTVkLTg2ZGQtN2M4OTllYzU1Y2Y0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Product Image" />
        <div className="p-4">
            <h5 className="text-md font-semibold text-gray-800">It ends with us</h5>
            <div className="mt-4 text-xl font-bold text-gray-900">$29.99</div>
        </div>
        <div className="flex justify-between p-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-3 rounded-lg">Play Now</button>
            
        </div>
    </div>
</a>



    
<a href="https://youtu.be/hh_rNTdx9t0?si=doq5qb6qVpNxlm_2" className="block max-w-xs w-full md:w-1/4">
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-80 object-cover" src="https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg" alt="Product Image" />
        <div className="p-4">
            <h5 className="text-md font-semibold text-gray-800">Atomic Habits</h5>
            <div className="mt-4 text-xl font-bold text-gray-900">$29.99</div>
        </div>
        <div className="flex justify-between p-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-3 rounded-lg">Play Now</button>
            
        </div>
    </div>
</a>
</div>

        

        </div>

       
        {/* Call to Action */}
        <div className="bg-blue-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Start your audio journey today with Audiobird.</span>
              {/* <span className="block">Sign up for a free trial.</span> */}
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
             Create your own Spotify for AudioBooks
            </p>
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      
    </div>
  )
}
