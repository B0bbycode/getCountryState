import React, { useState } from 'react';
import getCountries from '../utils/countries';
import getStates from '../utils/states';

const IndexPage: React.FC = () => {
  const countries = getCountries();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedState('');
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state);
  };

  return (
    <div>
      <h1>Select Country and State</h1>

      <div>
        <label htmlFor="country">Select Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <label htmlFor="state">Select State:</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            <option value="">Select</option>
            {getStates(selectedCountry).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedState && (
        <div>
          <p>Selected Country: {selectedCountry}</p>
          <p>Selected State: {selectedState}</p>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
