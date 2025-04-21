import axios from 'axios';

const BASE_URL = 'https://api.gbif.org/v1/species'; 

export const fetchSpecies = async (query = 'cat', limit = 8) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: { q: query, limit }, // Query and limit as parameters
    });

    console.log('Fetched species:', res.data.results); 

    return res.data.results;
  } catch (error) {
    console.error('Error fetching species:', error);
    return [];
  }
};
