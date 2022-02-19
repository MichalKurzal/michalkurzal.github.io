import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Typography from "@mui/material/Typography";
import {makeStyles} from '@mui/styles'
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const useStylesContainer = makeStyles(theme => ({
  root: {
    height: '100vh',
  }
}));

export default function About() {
  let myRef = useRef([]);
  const classesContainer = useStylesContainer();

  useEffect(() => {
    gsap.fromTo(myRef.current, { opacity: 0 }, { opacity: 0.7, duration: 1 });
  }, []);

  const style = {
    textAlign: "center",
    fontFamily:"monospace",
    marginBottom: 5,
  };

  const Img = styled("img")({
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Grid
    className={classesContainer.root}
      container
      spacing={2}
      sx={{
        paddingTop: 4,
        paddingLeft: 2,
        paddingRight: 2,
        bgcolor: 'background.default',
        color: 'text.primary',
        overflow: 'auto'
      }}
    >
      <Grid item xs={12} md={12} xl={6} sx={{display: 'flex!important'}}>
        <Img alt="complex" src="/dna-L.jpg" />
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
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={style}
          ref={(element) => {
            myRef.current[0] = element;
          }}
        >
          About Myself
        </Typography>
        <Typography
          variant="h4"
          sx={style}
          ref={(element) => {
            myRef.current[1] = element;
          }}
        >
          In 2020 I passed the german state exam in Sofware Development. Since
          then I've been working in this state-recognized proffession. I have
          practical work expirience in a few software development companies.
          During this time I was developing mobile and Tv Apps using popular
          frameworks like Ionic or React Native.
        </Typography>
        <Typography
          variant="h4"
          sx={style}
          ref={(element) => {
            myRef.current[2] = element;
          }}
        >
          In my free time I Like to playing Computer Games and listening to the
          Music.
        </Typography>
      </Grid>
    </Grid>
  );
}
