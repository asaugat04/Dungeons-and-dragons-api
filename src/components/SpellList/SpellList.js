import React, { useEffect, useState } from "react";
import { fetchSpells } from "../../api/dndApi";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const SpellList = ({ handleClick }) => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const loadSpells = async () => {
      const fetchedSpells = await fetchSpells();
      setSpells(fetchedSpells);
    };

    loadSpells();
  }, []);

  return (
    <Container style={{ width: "50%", margin: 0 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Spell List
      </Typography>
      <List>
        {spells.map((spell) => (
          <ListItem key={spell.index}>
            <ListItemButton onClick={() => handleClick(spell)}>
              <ListItemText primary={spell.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SpellList;
