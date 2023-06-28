import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getCountries } from '../utils/countries';
import { getStates } from '../utils/states';
import CountrySelector from '../components/CountrySelector';
import StateSelector from '../components/StateSelector';

const IndexPage: React.FC = () => {
  const countries = getCountries();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const country = event.target.value as string;
    setSelectedCountry(country);
    setSelectedState('');
  };

  const handleStateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const state = event.target.value as string;
    setSelectedState(state);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Select Country and State
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="country-label">Select Country</InputLabel>
        <Select
          labelId="country-label"
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCountry && (
        <StateSelector
          country={selectedCountry}
          selectedState={selectedState}
          onStateChange={handleStateChange}
        />
      )}

      {selectedState && (
        <div>
          <Typography variant="body1">
            Selected Country: {selectedCountry}
          </Typography>
          <Typography variant="body1">
            Selected State: {selectedState}
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default IndexPage;
