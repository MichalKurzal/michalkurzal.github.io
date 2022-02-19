import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const useStylesContainer = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
}));

export default function MobileApps() {
    let myRef = useRef([]);
    const classesContainer = useStylesContainer();

    useEffect(() => {
        gsap.fromTo(
            myRef.current,
            { opacity: 0 },
            { opacity: 0.7, duration: 1 }
        );
    }, []);

    const style = {
        textAlign: 'center',
        fontFamily: 'monospace',
        marginBottom: 5,
    };

    const Img = styled('img')({
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
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
                overflow: 'auto',
            }}
        >
            <Grid
                item
                xs={12}
                md={12}
                xl={6}
                sx={{ display: 'flex!important' }}
            >
                <Img alt="complex" src="/stock-market-L.jpg" />
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
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h2"
                    sx={style}
                    ref={(element) => {
                        myRef.current[0] = element;
                    }}
                >
                    Mobile Apps Development
                </Typography>
                <Typography
                    variant="h4"
                    sx={style}
                    ref={(element) => {
                        myRef.current[1] = element;
                    }}
                >
                    I have good knowlege of two very popular mobile frameworks
                </Typography>
                <Stack
                    direction="row"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: 5,
                    }}
                    spacing={1}
                    rowGap={2}
                >
                    <Chip
                        label="React-Native"
                        color="primary"
                        sx={{ fontSize: 24 }}
                    />
                    <Chip
                        label="Ionic"
                        color="secondary"
                        sx={{ fontSize: 24 }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: 5,
                    }}
                    spacing={1}
                    rowGap={2}
                >
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
