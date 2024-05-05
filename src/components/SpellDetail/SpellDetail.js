import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useEffect } from "react";

function SpellDetail({ spell, onFavToggle, isFav }) {
  useEffect(() => {
    console.log(spell, isFav);
  }, []);

  return (
    <Card
      className="carddd"
      style={{
        width: "50vw",
        backgroundColor: "red",
        position: "fixed",
        right: 0,
        top: "2vh",
        bottom: "12vh",
      }}
    >
      {/* <CardContent>
        <Typography variant="h5" component="div">
          {spell.name}
        </Typography>
        <Typography variant="body2">{spell.desc.join(" ")}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onFavToggle}>
          {isFav ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default SpellDetail;
