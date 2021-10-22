import MediaCard from "./card";
import Grid from "@mui/material/Grid";
import { dataJSON } from "../data";

export default function Cards() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      {dataJSON.map((cardData, index) => {
        return <MediaCard key={index} data={cardData} />;
      })}
    </Grid>
  );
}
