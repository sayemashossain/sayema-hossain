import { Box, Typography } from '@mui/material';
import { theme } from '../../../common/theme';

export const WhoAmI = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '32px',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '4px',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: theme.accent,
                }}
            >
                <Typography variant="h2">Sayema Syeda Hossain</Typography>
                <Typography variant="subtitle1">
                    Full Stack Developer
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '4px',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body1">
                    Developer by day and also by night.
                </Typography>
                <Typography variant="body1">And sometimes I do art.</Typography>
            </Box>
        </Box>
    );
};
