import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <input className='rounded-lg border-blue-500 w-[60vw] mr-4 text-black font-bold' type="text" value={searchTerm} onChange={handleChange} placeholder='Paste here the url address...' />
      <button className='rounded-lg w-40  hover:w-50 text-s bg-gradient-to-r from-blue-100 to-gray-100 mt-2' onClick={handleClick}>Get Topics</button>
    </div>
  );
};

export default SearchBox;