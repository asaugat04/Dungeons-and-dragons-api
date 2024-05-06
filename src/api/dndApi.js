import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

const API_BASE_URL = "https://www.dnd5eapi.co";

export const fetchSpells = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/spells`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching spells:", error);
    return [];
  }
};

export const fetchSpellDetails = async (url) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${url}`);
    return response.data;
    console.log(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { error: `Spell not found` };
    } else {
      console.error(`Error fetching spell details for ${url}:`, error);
      return { error: "Failed to fetch spell details" };
    }
  }
};
