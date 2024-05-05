import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useEffect, useState } from "react";
import { fetchSpellDetails } from "../../api/dndApi";

function SpellDetail({ spell, onFavToggle, isFav }) {
  const [spellDetails, setSpellDetails] = useState(null);

  useEffect(() => {
    const loaddetails = async () => {
      const fetchedDetails = fetchSpellDetails(spell.name);
      setSpellDetails(fetchedDetails);
      console.log(fetchedDetails);
    };
    loaddetails();
  }, [spell]);

  return (
    <Card
      className="carddd"
      style={{
        width: "50vw",
        position: "fixed",
        right: 0,
        top: "2vh",
        bottom: "12vh",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {spell.name}
        </Typography>
        {/* <Typography variant="body2">{spell.desc.join(" ")}</Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onFavToggle}>
          {isFav ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default SpellDetail;
