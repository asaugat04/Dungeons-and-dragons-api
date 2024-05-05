import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function SpellListItem({ spell, onClick }) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText primary={spell.name} />
    </ListItem>
  );
}

export default SpellListItem;
