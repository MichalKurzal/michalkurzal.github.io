import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
export default function MobileApps() {
  const style = {
    textAlign: "center",
    marginBottom: 5,
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingTop: 4, paddingLeft: 2, paddingRight: 2 }}
    >
      <Grid item xs={12} md={6}>
        <Img alt="complex" src="/stock-market-L.jpg" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={style}>
          Mobile Apps Development
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          spacing={1}
          rowGap={2}
        >
          <Chip label="React-Native" color="primary" />
          <Chip label="Ionic" color="success" />
          <Chip label="Android Studio" color="primary" />
          <Chip label="Android" color="success" />
          <Chip label="Hybrid Apps" color="default" />
          <Chip label="Cross Platform" color="success" />
          <Chip label="Multi-Touch Gestures" color="info" />
          <Chip label="Tv Apps" color="secondary" />
        </Stack>
      </Grid>
    </Grid>
  );
}
