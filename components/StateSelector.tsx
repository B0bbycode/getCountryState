import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getStates } from '../utils/states';

type StateSelectorProps = {
  country: string;
  selectedState: string;
  onStateChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const StateSelector: React.FC<StateSelectorProps> = ({
  country,
  selectedState,
  onStateChange,
}) => {
  const states = getStates(country);

  return (
    <FormControl fullWidth>
      <InputLabel id="state-label">Select State</InputLabel>
      <Select
        labelId="state-label"
        id="state"
        value={selectedState}
        onChange={onStateChange}
      >
        <MenuItem value="">
          <em>Select</em>
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StateSelector;
