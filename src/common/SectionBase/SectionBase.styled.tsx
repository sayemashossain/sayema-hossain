import { styled, Box } from '@mui/material';
import { theme } from '../theme';

const fullCircle = 360;
const halfCircle = fullCircle / 2;
const degreesOfBorder = 30;
const firstStart = halfCircle - degreesOfBorder;
const secondStart = fullCircle - degreesOfBorder;

const getSectionStyle = (background: string, border: string) => {
    return {
        backgroundColor: background,
        '& div': {
            background: `linear-gradient(to bottom, ${background}, ${background}) padding-box,
                conic-gradient(
                    from var(--bg-angle) at 50% 50%,
                    transparent ${firstStart}deg,
                    ${border} ${firstStart}deg 180deg,
                    transparent 180deg ${secondStart}deg,
                    ${border} ${secondStart}deg 360deg
                )
                border-box`,
        },
    };
};

export const StyledSection = styled(Box)({
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.primaryText,
    padding: '100px',

    '&:hover div': {
        animationPlayState: 'running',
    },

    '& div': {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        animation: 'spin 10s infinite linear paused',

        border: `6px solid transparent`,
    },

    '&:nth-of-type(even)': getSectionStyle(theme.primaryLight, theme.primary),
    '&:nth-of-type(odd)': getSectionStyle(theme.primary, theme.primaryLight),
});

export const AnimatedBorderBox = Box;
