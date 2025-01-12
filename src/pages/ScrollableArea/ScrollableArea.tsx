import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { Projects } from './Projects/Projects';

export const ScrollableArea = ({
    handleScroll,
    scrollPos,
}: {
    handleScroll: (scrollTopPos: number) => void;
    scrollPos: number;
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

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollPos);
        }
    }, [scrollPos]);

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
