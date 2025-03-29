import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Welcome to Our Church</h1>
        <p className="text-lg text-gray-600 mt-4">Join us in worship and community</p>
      </header>
      
      <div className="flex justify-center gap-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Join Us for Service</button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
