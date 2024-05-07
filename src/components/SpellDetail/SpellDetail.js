import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import { fetchSpellDetails } from "../../api/dndApi";

function SpellDetail({ spell, onFavToggle, isFav }) {
  const [spellDetails, setSpellDetails] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      setloading(true);
      const fetchedDetails = await fetchSpellDetails(spell.url);
      setSpellDetails(fetchedDetails);
      setloading(false);
    };
    if (spell) {
      loadDetails();
    } else {
      setSpellDetails(null);
    }
  }, [spell]);

  // Helper component to render spell descriptions
  const DescriptionSection = ({ content, isHeader = false }) => (
    <Typography
      variant="body2"
      style={{ fontWeight: isHeader ? "bold" : "normal" }}
    >
      {content}
    </Typography>
  );

  // Splits and formats the description sections from the dictionary
  const renderDescription = (desc) => {
    if (!desc || typeof desc !== "object") return null; // Guard clause for non-object or null descriptions

    return Object.values(desc).map((section, index) => {
      const matches = section.match(/^(.*?)\*\*\*(.+?)\.\*\*\*(.*)$/);
      if (matches) {
        // Extract and format with header
        const before = matches[1];
        const header = matches[2];
        const after = matches[3];
        return loading ? (
          <>loading</>
        ) : (
          <React.Fragment key={index}>
            {before && <DescriptionSection content={before.trim()} />}
            <DescriptionSection content={header.trim()} isHeader={true} />
            {after && <DescriptionSection content={after.trim()} />}
          </React.Fragment>
        );
      }
      // Regular content without header
      return <DescriptionSection key={index} content={section} />;
    });
  };

  return loading && spell ? (
    <Card
      className="loader"
      style={{
        width: "50vw",
        position: "fixed",
        overflowY: "scroll",
        right: 0,
        top: "2vh",
        bottom: "12vh",
        scrollbarWidth: "none",
      }}
    >
      <CardContent>
        <Skeleton
          variant="rounded"
          animation="wave"
          width={210}
          height={30}
          style={{ marginBottom: 15 }}
        />
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            animation="wave"
            width="90%"
            height={"10vh"}
            style={{ marginBlock: 5 }}
          />
        ))}
      </CardContent>
      <CardActions>
        <Skeleton
          variant="rounded"
          animation="wave"
          width={150}
          height={25}
          style={{ marginBottom: 15 }}
        />
      </CardActions>
    </Card>
  ) : (
    <Card
      className="carddd"
      style={{
        width: "50vw",
        position: "fixed",
        overflowY: "scroll",
        right: 0,
        top: "2vh",
        bottom: "12vh",
        scrollbarWidth: "none",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {spell && spell.name}
        </Typography>
        {spellDetails && renderDescription(spellDetails.desc)}
      </CardContent>
      <CardActions>
        {spell && (
          <Button size="small" color="primary" onClick={onFavToggle}>
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default SpellDetail;
