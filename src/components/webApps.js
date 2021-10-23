import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function WebApps() {
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
      sx={{
        paddingTop: 4,
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <Grid item xs={12} md={6}>
        <Img alt="complex" src="/source-L.jpg" />
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
          Web Apps Development
        </Typography>
        <Typography variant="h4" sx={style}>
          I have good knowlege of two very popular JavaScript frameworks
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 5,
          }}
          spacing={1}
          rowGap={2}
        >
          <Chip label="React.js" color="primary" sx={{ fontSize: 24 }} />
          <Chip label="Angular" color="secondary" sx={{ fontSize: 24 }} />
        </Stack>
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
          <Chip label="HTML" color="primary" />
          <Chip label="CSS" color="success" />
          <Chip label="JavaSript" color="default" />
          <Chip label="TypeScript" color="success" />
          <Chip label="ES6+" color="secondary" />
          <Chip label="Node.js" color="info" />
          <Chip label="nmp" color="secondary" />
          <Chip label="yarn" color="primary" />
          <Chip label="Responsive Design" color="success" />
          <Chip label="Front-End Development" color="default" />
          <Chip label="CMS" color="success" />
          <Chip label="Wordpress" color="info" />
        </Stack>
      </Grid>
    </Grid>
  );
}
