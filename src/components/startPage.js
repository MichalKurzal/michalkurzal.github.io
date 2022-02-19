import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Cards from './cards';
import Footer from './footer';
import { useContext } from 'react';
import AppContext from '../api/context';
import { useCallback } from 'react';
import { useState } from 'react';

export default function StartPage() {
    const { setTheme, theme, darkTheme } = useContext(AppContext);
    const [dark, setDark] = useState(true);
    const scroll = () => {
        let element = document.getElementById('cards');
        element.scrollIntoView();
    };

    const toggleTheme = useCallback(() => {
        setTheme((prevMode) => (prevMode === darkTheme ? theme : darkTheme));
    }, []);

    const toggleIcon = useCallback(() => {
        setDark(!dark);
    }, [dark]);

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
                    {dark ? <LightModeIcon /> : <NightlightIcon />}
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
