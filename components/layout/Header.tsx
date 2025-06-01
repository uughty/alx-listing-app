import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ALX Listing</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-md"
      />
    </header>
  );
};

export default Header;
