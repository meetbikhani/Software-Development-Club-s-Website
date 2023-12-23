import React from 'react';
import { useTheme } from '../../Context/themeContext';

const Event = ({ events }) => {
  const {darkMode} = useTheme();
  return (
  <div className={`flex flex-col  md:flex-row max-w-8xl  justify-between box-border  bg-gradient-to-b from-purple-700 to-purple-950 border-2 border-white rounded-3xl`}>
  <img className="mt-3 mb-3 mx-auto md:mx-3 h-[220px] w-[220px] rounded-3xl border-white border-4 " src={events.image} alt={events.title} />
  <div className="flex-1 flex flex-col font-poppins px-6 py-4 justify-center  text-center ">
    <h1 className="mt-3 select-none mb-3 mx-3 font-semibold text-white text-5xl text-decoration-line: underline underline-offset-4	">{events.title}</h1>
    <h1 className="mt-3 select-none mb-3 mx-3 font-semibold text-white text-l ">{events.date}</h1>
    <h1 className="mt-3 select-none mb-3 mx-3 font-semibold text-white text-xl ">{events.description}</h1>
    
  </div>
</div>

  
  );
};

export default Event;
