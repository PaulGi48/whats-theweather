import Head from 'next/head';
import Image from 'next/image';
import weatherJokes from '../public/data/marquee.json';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Displaytable from "../components/displaytable/displaytable";
import Spinner from "../components/spinner/spinner";
import Slideshow from "../components/slideshow/slideshow";


export default function Home() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>WHAT'S THE WEATHER?</title>
        <meta name="description" content="Engineered By Giovanni Paul- Sodipo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container'>
        <div><h1 className="title">
          What's the <span>Weather?</span>
        </h1> 
        </div>
      
      <div style={{ position: 'relative' }}>
        <div className="bg-blue-100 py-2 overflow-hidden">
          <div className="text-shadow-sm whitespace-nowrap">
            {weatherJokes.map((joke, index) => (
              <span key={index} className="inline-block">
                {joke}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: 'fixed', zIndex: '0' }}>
          <Slideshow />
        </div>
        <div className="relative flex flex-col justify-center items-center max-w-[500px] w-full m-auto pt-5 mt-10">
          <form onSubmit={fetchWeather} className="flex justify-between bg-black bg-opacity-30 m-auto p-4 border border-gray-200 text-bold text-white text-2xl rounded-2xl">
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="bg-transparent border-separate focus:outline-none mr-2 px-2 py-1 rounded-md placeholder:text-white" autoComplete="off" />
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="bg-transparent border-separate focus:outline-none mr-2 px-2 py-1 rounded-md placeholder:text-white" autoComplete="off" />
            <button type="submit" className="px-2 py-1 rounded-md bg-transparent hover:bg-green-600">
              <BsSearch />
            </button>
          </form>
          {loading ? (
            <Spinner />
          ) : (
            <div>
              {weather.main && (
                <Displaytable weather={weather} />
              )}
            </div>
          )}
        </div>
      </div>

      <footer>
        <p>Engineered By <a href="https://www.linkedin.com/in/giovanni-paul-sodipo-968324183/" alt="profile">Giovanni Paul- Sodipo</a></p>
      </footer>
    </div>
    
    </div>
  );
}
