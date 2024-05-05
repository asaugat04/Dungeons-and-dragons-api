import axios from "axios";

const API_BASE_URL = "https://www.dnd5eapi.co/api/spells";

export const fetchSpells = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching spells:", error);
    return [];
  }
};

export const fetchSpellDetails = async (name) => {
  try {
    const response = await axios.get(API_BASE_URL + "/" + name);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching spell details:", error);
    return [];
  }
};
