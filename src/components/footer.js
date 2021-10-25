import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Footer() {
  return (
    <Grid container sx={{ bgcolor: "primary.main", padding: 2 }}>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h5">Michal Kurzal 2021</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" textAlign="center">
          E-Mail: michalkurzal200@gmail.com
        </Typography>
      </Grid>
    </Grid>
  );
}
