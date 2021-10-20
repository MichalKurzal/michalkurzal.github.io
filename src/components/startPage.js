import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Cards from "./cards";

export default function StartPage() {
  const style = {
    textAlign: "center",
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Grid container>
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: 4, paddingLeft: 2, paddingRight: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Img alt="complex" src="/desert.jpg" />
        </Grid>
        <Grid container spacing={2} xs={12} md={6}>
          <Grid
            item
            xs
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" sx={style}>
              Heading
            </Typography>
            <Typography sx={style} variant="h4">
              Loren dihsdius dsiudhgsui dsuidgauih fdduifhgs dsudhgskj sduhsjkdh
              Loren dihsdius dsiudhgsui dsuidgauih fdduifhgs dsudhgskj sduhsjkdh
            </Typography>
            <Button variant="contained">Contained</Button>
          </Grid>
        </Grid>
      </Grid>
      <Cards />
    </Grid>
  );
}
