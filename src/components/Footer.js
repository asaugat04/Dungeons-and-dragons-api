import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer({ setLoadFavorites, setSelectedSpell }) {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      className="hello"
      sx={{
        width: "100%",
        justifyContent: "space-around",
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          justifyContent: "space-around",
          margin: 0,
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            setSelectedSpell(null);
            setLoadFavorites(false);
          }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            setLoadFavorites(true);
            setSelectedSpell(null);
          }}
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
