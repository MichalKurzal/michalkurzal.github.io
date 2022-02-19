import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Cards from "./cards";
import Footer from "./footer";


export default function StartPage() {


 const scroll = () => {
    let element = document.getElementById("cards");
    element.scrollIntoView();
  };

  const style = {
    fontFamily:"monospace", 
    marginBottom:2,
    paddingLeft:2,
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Grid container sx={{ width: 'auto', overflow:'hidden' }}>
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: 4, paddingLeft: 2, paddingRight: 2, margin:0 }}
      >
        <Grid  xs={12} md={12} xl={6} sx={{display:'flex', alignContent:"center", padding:0}}>
          <Img alt="complex" src="/desert.jpg" />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          xl={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'flex-start',
            width:'100%',
            margin:0, 
            padding:0,
          }}
        >
          <Typography variant="h2" sx={style}>
            Michal Kurzal's Portfolio
          </Typography>
          <Typography sx={style} variant="h4">
            Hi, my name is Michal and I am a Javascript and Typesript developer.
            I have solid skills in many frameworks, like Angular, React , React
            Native or Ionic. I have expirience in cross platform mobile and web
            Apps Development.
          </Typography>
          <Button variant="contained" onClick={scroll} sx={{width:200, marginLeft:5}}>
            Learn More
          </Button>
        </Grid>
      </Grid>
      <Cards />
      <Footer />
    </Grid>
  );
}
