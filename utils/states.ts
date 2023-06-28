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
        'Canada': ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
        'Croatia': ['Zagreb', 'Split-Dalmatia County', 'Dubrovnik-Neretva County', 'Istria County'],
        'Cyprus': ['Nicosia', 'Limassol', 'Larnaca', 'Paphos'],
        'Czech Republic': ['Prague', 'Central Bohemia', 'South Bohemia', 'Moravia-Silesia'],
        'Denmark': ['Capital Region of Denmark', 'Central Denmark Region', 'Region of Southern Denmark', 'North Denmark Region'],
        'Estonia': ['Harju County', 'Tartu County', 'Ida-Viru County', 'Pärnu County'],
        'Finland': ['Uusimaa', 'Pirkanmaa', 'Varsinais-Suomi', 'Kanta-Häme'],
        'France': ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes'],
        'Germany': ['Berlin', 'Bavaria', 'Hamburg', 'North Rhine-Westphalia'],
        'Greece': ['Attica', 'Central Macedonia', 'Crete', 'Peloponnese'],
        'Hungary': ['Budapest', 'Pest County', 'Debrecen', 'Szeged'],
        'Ireland': ['Dublin', 'Cork', 'Galway', 'Limerick'],
        'Italy': ['Lazio', 'Lombardy', 'Campania', 'Sicily'],
        'Lithuania': ['Vilnius County', 'Kaunas County', 'Klaipėda County', 'Šiauliai County'],
        'Luxembourg': ['Luxembourg District', 'Grevenmacher District', 'Diekirch District'],
    // Add more country-state mappings as needed
    };
  
    // Check if the selected country exists in the state map
    if (country in stateMap) {
      return stateMap[country];
    }
  
    // Return an empty array if the country is not found in the state map
    return [];
  };
  
  export default getStates;
  