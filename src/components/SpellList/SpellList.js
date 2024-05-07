import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { fetchSpells } from "../../api/dndApi";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const SpellList = ({ handleClick, loadFavorites, favorites }) => {
  const [spells, setSpells] = useState([]);
  const loadSpells = async () => {
    const fetchedSpells = await fetchSpells();
    setSpells(fetchedSpells);
  };
  const loadFavoriteSpells = async () => {
    setSpells(favorites);
  };
  useEffect(() => {
    loadFavorites ? loadFavoriteSpells() : loadSpells();
  }, [loadFavorites, favorites]);

  return (
    spells && (
      <Box style={{ width: "50%", margin: 0 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Spell List
        </Typography>
        <List>
          {spells.map((spell) => (
            <ListItem
              key={spell.index}
              style={{ marginBlock: 0, paddingBlock: 0, paddingLeft: 15 }}
            >
              <ListItemButton
                style={{ marginBlock: 4, paddingBlock: 2 }}
                onClick={() => handleClick(spell)}
              >
                <ListItemText primary={spell.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  );
};

export default SpellList;
