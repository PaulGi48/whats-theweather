import Head from 'next/head';
import Image from 'next/image';
import Marquee from '../components/marquee/marquee.js';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Displaytable from "../components/displaytable/displaytable";
import Spinner from "../components/spinner/spinner";
import Slideshow from "../components/slideshow/slideshow";
import Footer from '../components/footer';


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
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className='main'>
        <div style={{ position: 'fixed' }}>
          <Marquee/>
        </div>
        <div className="flex justify-center items-center h-full">
          <h1 className="title text-center pt-10">
            What's the <span>Weather?</span>
          </h1>
        </div>
        <div style={{ position: 'fixed', zIndex: '-20' }}>
          <Slideshow />
        </div>
        <div className="relative flex flex-col justify-center items-center max-w-[500px] w-full m-auto pt-2 mt-5">
          <form onSubmit={fetchWeather} className="justify-between bg-black bg-opacity-30 m-auto p-4 border-gray-200 text-bold text-white text-2xl rounded-2xl">
            <input id="city-input" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="bg-transparent border-separate focus:outline-none mr-2 px-2 py-1 rounded-md placeholder:text-white" autoComplete="off" list="cities" />
            <datalist id="cities">
              <option value="New York"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
              <option value="Houston"></option>
              <option value="Phoenix"></option>
            </datalist>
            <input id="country-input" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="bg-transparent border-separate focus:outline-none mr-2 px-2 py-1 rounded-md placeholder:text-white" autoComplete="off" list="countries" />
            <datalist id="countries">
              <option value="USA"></option>
              <option value="Canada"></option>
              <option value="Mexico"></option>
              <option value="Brazil"></option>
              <option value="France"></option>
            </datalist>
            <button type="submit" className="px-2 py-1 rounded-md bg-transparent hover:bg-green-600">
              <BsSearch />
            </button>
          </form>
          {loading ? (
            <Spinner />
          ) : (
            weather.main && <Displaytable weather={weather} />
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
}