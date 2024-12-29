'use client'
import styles from './index.module.css';
import React, { useState } from 'react';
import countries from './data'; 
import { Countries } from './types';
import Image from 'next/image';

const App: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<Countries>();
  
    const randomCountry = () => {
      const index = Math.floor(Math.random() * countries.length);
      setSelectedCountry(countries[index]);
    };
  
    return (
      <div className={styles.container}>
        <p className={styles.Title}>Learn more about where to travel!</p>
        
        <button onClick={randomCountry} className={styles.Button}>Select Random Country</button>
        
        {selectedCountry && (
          <div className={styles.CountryBlock}>
            <Image src={selectedCountry.flag} alt={'flag image'} className={styles.flag}/>
            <h2>{selectedCountry.name}</h2>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Language: {selectedCountry.Language}</p>
            <p>Population: {selectedCountry.Population}</p>
            <p>Currency: {selectedCountry.Currency}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default App;