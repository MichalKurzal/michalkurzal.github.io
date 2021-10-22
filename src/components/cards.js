import MediaCard from "./card";
import Grid from "@mui/material/Grid";

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
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Grid>
  );
}
