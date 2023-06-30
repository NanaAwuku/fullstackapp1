import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Welcome to My Application</h1>
      <p className="text-lg">Introduction and description of your application</p>
      <Link to="/form" className="py-2 px-4 bg-blue-500 text-white rounded-md mt-4 inline-block">
        Go to Form
      </Link>
    </div>
  );
}

export default HomePage;
