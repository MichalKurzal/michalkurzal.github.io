import { useContext, useCallback } from 'react';
import {Typography, Grid, Button, IconButton }from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Cards from './cards';
import Footer from './footer';
import AppContext from '../api/context';


export default function StartPage() {
    const { setTheme, theme, darkTheme, mode, setMode } = useContext(AppContext);
    const scroll = () => {
        let element = document.getElementById('cards');
        element.scrollIntoView();
    };

    const toggleTheme = useCallback(() => {
        setTheme(mode ? theme: darkTheme)
    }, [mode]);

    const toggleIcon = useCallback(() => {
        setMode(!mode);
    }, [mode]);

    const style = {
        fontFamily: 'monospace',
        marginBottom: 2,
        paddingLeft: 2,
    };

    const Img = styled('img')({
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    return (
        <Grid
            container
            sx={{
                width: 'auto',
                overflow: 'hidden',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            <Grid
                container
                direction="column"
                md={12}
                xl={6}
                sx={{ display: 'flex', alignContent: 'center', padding: 5 }}
            >
                <IconButton
                    aria-label="lightMode"
                    onClick={() => {toggleTheme(); toggleIcon() }}
                >
                    {mode ? <LightModeIcon /> : <NightlightIcon />}
                </IconButton>
                <Img alt="complex" src="/desert.jpg" />
            </Grid>
            <Grid
                item
                xs={12}
                md={12}
                xl={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    margin: 0,
                    padding: 0,
                }}
            >
                <Typography variant="h2" sx={style}>
                    Michal Kurzal's Portfolio
                </Typography>
                <Typography sx={style} variant="h4">
                    Hi, my name is Michal and I am a Javascript and Typesript
                    developer. I have solid skills in many frameworks, like
                    Angular, React , React Native or Ionic. I have expirience in
                    cross platform mobile and web Apps Development.
                </Typography>
                <Button
                    variant="contained"
                    onClick={scroll}
                    sx={{ width: 200, marginLeft: 5 }}
                >
                    Learn More
                </Button>
            </Grid>

            <Cards />
            <Footer />
        </Grid>
    );
}
