import axios from 'axios';

const BASE_URL = 'https://api.gbif.org/v1';

export const fetchSpecies = async (query = 'cat', limit = 8) => {
  try {
    const res = await axios.get(`${BASE_URL}/species/search`, {
      params: { q: query, limit },
    });
    return res.data.results;
  } catch (error) {
    console.error('Error fetching species:', error);
    return [];
  }
};
