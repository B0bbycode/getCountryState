import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getCountries } from '../utils/countries';

type CountrySelectorProps = {
  selectedCountry: string;
  onCountryChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountry,
  onCountryChange,
}) => {
  const countries = getCountries();

  return (
    <FormControl fullWidth>
      <InputLabel id="country-label">Select Country</InputLabel>
      <Select
        labelId="country-label"
        id="country"
        value={selectedCountry}
        onChange={onCountryChange}
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
  );
};

export default CountrySelector;
