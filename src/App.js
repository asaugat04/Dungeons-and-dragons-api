import React, { useEffect, useState } from "react";
import SpellList from "./components/SpellList/SpellList";
import SpellDetail from "./components/SpellDetail/SpellDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useLocalStorage from "./hooks/useLocalStorage";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function App() {
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const handleSpellClick = (spell) => {
    setSelectedSpell(spell);
    console.log(spell);
  };

  const handleFavToggle = () => {
    const isFav = favorites.some((f) => f.index === selectedSpell.index);
    if (isFav) {
      setFavorites(favorites.filter((f) => f.index !== selectedSpell.index));
    } else {
      setFavorites([...favorites, selectedSpell]);
    }
  };

  return (
    <>
      <Box style={{ display: "flex" }}>
        <SpellList handleClick={handleSpellClick} />
        {selectedSpell && (
          <SpellDetail
            spell={selectedSpell}
            onFavToggle={handleFavToggle}
            isFav={true}
          />
        )}
      </Box>
      <Footer />
    </>
  );
}

export default App;
