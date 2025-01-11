import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { theme } from '../../common/theme';
import { useEffect, useState } from 'react';

const convertVhToPx = (vh: number) => {
    const oneVhInPx = window.innerHeight / 100;
    const vhInPx = oneVhInPx * vh;
    return vhInPx;
};

enum Navigations {
    ABOUT = 'About',
    PROJECTS = 'Projects',
    EXPERIENCE = 'Experience',
}

export const Navigation = ({ scrollPos }: { scrollPos: number }) => {
    const [nav, setNav] = useState<Navigations>(Navigations.ABOUT);

    useEffect(() => {
        if (scrollPos > convertVhToPx(98 + 98 / 2)) {
            setNav(Navigations.EXPERIENCE);
        } else if (scrollPos > convertVhToPx(98 / 2)) {
            setNav(Navigations.PROJECTS);
        } else {
            setNav(Navigations.ABOUT);
        }
    }, [scrollPos]);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                alignItems: 'center',
            }}
        >
            <Box>
                <Typography
                    variant={nav === Navigations.ABOUT ? 'h5' : 'body2'}
                >
                    About
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant={nav === Navigations.PROJECTS ? 'h5' : 'body2'}
                >
                    Projects
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant={nav === Navigations.EXPERIENCE ? 'h5' : 'body2'}
                >
                    Experience
                </Typography>
            </Box>
        </Box>
    );
};

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

export const Links = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '16px',
                alignItems: 'center',
                color: theme.accent,
            }}
        >
            <LinkedIn />
            <GitHub />
            <Instagram />
        </Box>
    );
};

export const StaticArea = ({ scrollPos }: { scrollPos: number }) => {
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
            <Navigation scrollPos={scrollPos} />
            <Links />
        </Box>
    );
};
