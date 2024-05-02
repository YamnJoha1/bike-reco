import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import CustomButton from './CustomButton';

interface Bike {
  id: number;
  title: string;
  stolen: boolean;
  date_stolen: number;
}

const SearchBar: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://bikeindex.org/api/v3/search?page=1&per_page=10&location=munich&stolensses=stolen');
      const result  = await response.json();
      setBikes(result.bikes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterBikes(event.target.value, startDate, endDate);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
    filterBikes(searchTerm, event.target.value, endDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
    filterBikes(searchTerm, startDate, event.target.value);
  };

  const filterBikes = (searchTerm: string, startDate: string, endDate: string) => {
    const filtered = bikes.filter(bike => {
      return bike.title.toLowerCase().includes(searchTerm.toLowerCase()) && bike.stolen &&
        (!startDate || bike.date_stolen >= Date.parse(startDate)) &&
        (!endDate || bike.date_stolen <= Date.parse(endDate));
    });
    setFilteredBikes(filtered);
  };
  


  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between items-center w-full gap-10'>
        <div className='w-full mt-5 relative flex items-center'>
          <input type="text" placeholder="Search by title" value={searchTerm} onChange={handleSearch} 
            className='searchbar__input realtive'
          />
          <CustomButton 
            btnType='submit' 
            containerStyles=''
            title=''
            rightIcon='/magnifying-glass.svg'
          />
        </div> 
        <div className='flex gap-4'>
          <div className='flex flex-col items-center'>
            <p className='mr-3 text-sm text-grey'>Start Date</p>
            <input type="date" placeholder="Start Date" value={startDate} onChange={handleStartDateChange} className='searchbar__input' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='mr-3 text-sm text-grey'>end date</p>
            <input type="date" placeholder="End Date" value={endDate} onChange={handleEndDateChange} className='searchbar__input' />
          </div>
        </div>
      </div>
      <ul>
        {filteredBikes.map(bike => (
          <li key={bike.id}>{bike.title}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
