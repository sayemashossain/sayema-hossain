import { FastForward, FastRewind } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import { SECTION_HEIGHT_VH } from '../../../common/SectionBase/SectionBase';

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

export const NavTab = ({
    title,
    active,
    handleClick,
}: {
    title: ReactNode;
    active: boolean;
    handleClick: () => void;
}) => {
    return active ? (
        <Button
            color="secondary"
            sx={{
                fontWeight: 'bold',
                gap: 0,
                transition: 'gap 0.4s',
                '&:hover': {
                    gap: '30px',
                },
            }}
            variant="text"
            onClick={handleClick}
            endIcon={<FastRewind />}
            startIcon={<FastForward />}
        >
            {title}
        </Button>
    ) : (
        <Button
            color="primary"
            sx={{
                fontWeight: 'light',
            }}
            variant="text"
            onClick={handleClick}
        >
            {title}
        </Button>
    );
};

export const Navigation = ({
    handleScroll,
    scrollPos,
}: {
    handleScroll: (scrollTopPos: number) => void;
    scrollPos: number;
}) => {
    const [nav, setNav] = useState<Navigations>(Navigations.ABOUT);

    useEffect(() => {
        if (
            scrollPos > convertVhToPx(SECTION_HEIGHT_VH + SECTION_HEIGHT_VH / 2)
        ) {
            setNav(Navigations.EXPERIENCE);
        } else if (scrollPos > convertVhToPx(SECTION_HEIGHT_VH / 2)) {
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
                <NavTab
                    title="About"
                    active={nav === Navigations.ABOUT}
                    handleClick={() => handleScroll(convertVhToPx(0))}
                />
            </Box>
            <Box>
                <NavTab
                    title="Projects"
                    active={nav === Navigations.PROJECTS}
                    handleClick={() =>
                        handleScroll(convertVhToPx(SECTION_HEIGHT_VH))
                    }
                />
            </Box>
            <Box>
                <NavTab
                    title="Experience"
                    active={nav === Navigations.EXPERIENCE}
                    handleClick={() =>
                        handleScroll(convertVhToPx(SECTION_HEIGHT_VH * 2))
                    }
                />
            </Box>
        </Box>
    );
};
