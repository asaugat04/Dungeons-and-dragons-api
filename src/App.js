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
  const [loadFavorites, setLoadFavorites] = useState(false);

  const handleSpellClick = (spell) => {
    setSelectedSpell(spell);
  };
  const isFav = (spell) => {
    let isfav = false;
    if (favorites && spell) {
      favorites.forEach((element) => {
        if (element.index == spell.index) isfav = true;
      });
    }
    return isfav;
  };
  const handleFavToggle = () => {
    const isFav = favorites.some((f) => f.index === selectedSpell.index);
    if (isFav) {
      setFavorites(favorites.filter((f) => f.index !== selectedSpell.index));
      if (loadFavorites) setSelectedSpell(null);
    } else {
      setFavorites([...favorites, selectedSpell]);
    }
  };

  return (
    <>
      <Box style={{ display: "flex" }}>
        <SpellList
          loadFavorites={loadFavorites}
          favorites={favorites}
          setSelectedSpell={setSelectedSpell}
          handleClick={handleSpellClick}
        />
        {loadFavorites && favorites.length < 1 ? (
          <h1 style={{ marginLeft: -190, marginTop: 150 }}>
            NO spells in faviorites
          </h1>
        ) : (
          <SpellDetail
            spell={selectedSpell}
            onFavToggle={handleFavToggle}
            isFav={isFav(selectedSpell)}
          />
        )}
      </Box>
      <Footer
        loadFavorites={loadFavorites}
        setLoadFavorites={setLoadFavorites}
        setSelectedSpell={setSelectedSpell}
      />
    </>
  );
}

export default App;
