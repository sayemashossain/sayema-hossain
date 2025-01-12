import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

export const Links = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '8px',
                alignItems: 'center',
            }}
        >
            <IconButton color="secondary">
                <LinkedIn />
            </IconButton>
            <IconButton color="secondary">
                <GitHub />
            </IconButton>
            <IconButton color="secondary">
                <Instagram />
            </IconButton>
        </Box>
    );
};
