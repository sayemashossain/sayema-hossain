import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { Projects } from './Projects/Projects';

export const ScrollableArea = ({
    handleScroll,
}: {
    handleScroll: (scrollTopPos: number) => void;
}) => {
    const scrollRef = useRef<Element | undefined>();

    useEffect(() => {
        if (scrollRef.current) {
            const eventFunction = () =>
                handleScroll(
                    scrollRef.current ? scrollRef.current.scrollTop : 0
                );
            scrollRef.current.addEventListener('scroll', eventFunction);

            return () =>
                scrollRef.current?.removeEventListener('scroll', eventFunction);
        }
    }, [scrollRef.current?.scrollTop]);

    return (
        <Box
            ref={scrollRef}
            sx={{
                width: '60%',
                overflowY: 'scroll',
            }}
        >
            <About />
            <Projects />
            <Experience />
        </Box>
    );
};
