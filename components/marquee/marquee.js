import React from 'react';
import './Marquee.css';
import Jokes from '/public/data/marquee.json'

const Marquee = () => {
  return (
    <div className="marquee">
      {jokes.map((joke, index) => (
        <span key={index}>{joke}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      ))}
    </div>
  );
};
// it was just a fun idea to try out very late 2000 of me

export default Marquee;
