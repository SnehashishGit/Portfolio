import React, { useState, useEffect } from 'react';
import './Title.css'; // Make sure to import your CSS file
import frontendEmoji from '../images/frontend_emoji.png';
import freelancerEmoji from '../images/freelancer_emoji.png';
import sophomoreEmoji from '../images/sophomore_emoji.png';

import coderEmoji from '../images/coder_emoji.png';


const Title = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Front end React Developer', 'Freelancer "Working"', 'Knowledge Explorer ',  'Passionate Developer'];
  const emojis = [frontendEmoji, freelancerEmoji, sophomoreEmoji, coderEmoji];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2000 milliseconds (2 seconds)

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <div className="changing-role-container">
      <h1 className="changing-role">{roles[roleIndex]}</h1>
      <img src={emojis[roleIndex]} alt="Emoji" className="emoji" />
    </div>
  );
};

export default Title;
