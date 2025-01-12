import { Box } from '@mui/material';
import { useState } from 'react';
import { ScrollableArea } from './ScrollableArea/ScrollableArea';
import { StaticArea } from './StaticArea/StaticArea';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const customMuiTheme = createTheme({
    palette: {
        primary: {
            main: '#989c94',
            light: '#bdc2bf',
            dark: '#25291c',
        },
        secondary: {
            main: '#e6e49f',
            contrastText: '#25291c',
        },
    },
});

export const Main = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = (scrollTopPos: number) => setScrollPos(scrollTopPos);

    return (
        <ThemeProvider theme={customMuiTheme}>
            <Box
                sx={{
                    boxSizing: 'border-box',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                }}
            >
                <StaticArea scrollPos={scrollPos} handleScroll={handleScroll} />
                <ScrollableArea
                    scrollPos={scrollPos}
                    handleScroll={handleScroll}
                />
            </Box>
        </ThemeProvider>
    );
};
