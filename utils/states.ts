type StateMap = {
    [country: string]: string[];
  };
  
  const getStates = (country: string): string[] => {
    // Defining the state mappings for each country
    const stateMap: StateMap = {
        'Australia': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'],
        'Austria': ['Vienna', 'Upper Austria', 'Styria', 'Tyrol'],
        'Belgium': ['Brussels', 'Flanders', 'Wallonia'],
        'Bulgaria': ['Sofia City Province', 'Plovdiv', 'Varna', 'Burgas'],
    };
  
    // Check if the selected country exists in the state map
    if (country in stateMap) {
      return stateMap[country];
    }
  
    // Return an empty array if the country is not found in the state map
    return [];
  };
  
  export default getStates;
  