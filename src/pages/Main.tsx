import { Box } from '@mui/material';
import { useState } from 'react';
import { ScrollableArea } from './ScrollableArea/ScrollableArea';
import { StaticArea } from './StaticArea/StaticArea';

export const Main = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = (scrollTopPos: number) => setScrollPos(scrollTopPos);

    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                height: '100vh',
                width: '100vw',
                display: 'flex',
            }}
        >
            <StaticArea scrollPos={scrollPos} />
            <ScrollableArea handleScroll={handleScroll} />
        </Box>
    );
};
