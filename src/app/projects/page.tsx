// pages/index.js

import React from 'react';

const projects = [
  {
    title: 'HomePage-of-Netflix',
    description: "The Netflix homepage is designed to provide users with a seamless and engaging experience right from the moment they arrive",
    gitlink: "https://github.com/Radha2612/Homepage-of-Netflix",
  },
  {
    title: 'Weather Website',
    description: 'A weather website is designed to provide users with up-to-date weather information, including current conditions, forecasts, and other related data. Below is a detailed description of its key components and layout, as well as the technologies used (HTML, CSS, and JavaScript) to implement it.',
    gitlink: "https://github.com/Radha2612/Weather-website",
  },
  // Add more projects as needed
];

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-lg">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a
                href ={project.gitlink}

                className="inline-block mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
        >see code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
