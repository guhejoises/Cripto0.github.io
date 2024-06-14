import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, useScrollTrigger, CssBaseline, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

// Importa la imagen correctamente
const TEMP_LOGO_URL = require('./../../media/LA WEA FOME.png');

const ShrinkOnScroll = styled(Toolbar)(({ theme, trigger }) => ({
    transition: theme.transitions.create(['min-height', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shortest,
    }),
    minHeight: trigger ? 48 : 64,
    padding: trigger ? theme.spacing(0, 1) : theme.spacing(0, 2),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 'auto', // Ajusta la anchura del contenedor según el contenido
}));

const Logo = styled('img')(({ theme, isMobile }) => ({
    width: isMobile ? '30%' : '10%', // Ajusta la anchura del logo según el tamaño de la pantalla
    height: 'auto', // Mantiene la proporción de la altura
}));

const MenuBar = ({ toggleDrawer }) => {
    const trigger = useScrollTrigger({ disableHysteresis: true });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" style={{ background: 'linear-gradient(to right, #96ac60, #d9ef9f, #96ac60)' }}>
                <ShrinkOnScroll trigger={trigger}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ marginLeft: 8 }}>
                        Menú
                    </Typography>
                    <Box flexGrow={1} />
                    <LogoContainer>
                        <Logo src={TEMP_LOGO_URL} alt="Logo" isMobile={isMobile} />
                    </LogoContainer>
                </ShrinkOnScroll>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default MenuBar;
