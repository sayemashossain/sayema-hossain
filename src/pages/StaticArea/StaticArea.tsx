import { Box } from '@mui/material';
import { theme } from '../../common/theme';
import { Navigation } from './Navigation/Navigation';
import { Links } from './Links/Links';
import { WhoAmI } from './WhoAmI/WhoAmI';

export const StaticArea = ({
    handleScroll,
    scrollPos,
}: {
    handleScroll: (scrollTopPos: number) => void;
    scrollPos: number;
}) => {
    return (
        <Box
            sx={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '60px',
                padding: '8px 32px',
                backgroundColor: theme.primaryDark,
                color: theme.lightText,
            }}
        >
            <WhoAmI />
            <Navigation scrollPos={scrollPos} handleScroll={handleScroll} />
            <Links />
        </Box>
    );
};
