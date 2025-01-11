import { Typography } from '@mui/material';
import {
    AnimatedBorderBox,
    StyledSection,
} from '../../../common/SectionBase/SectionBase.styled';

export const About = () => {
    return (
        <StyledSection>
            <AnimatedBorderBox>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                    quae vitae minus consequatur assumenda nobis nostrum,
                    laborum modi! Beatae voluptatum vitae provident ex.
                    Consectetur cum expedita unde aperiam dolorum error.
                </Typography>
            </AnimatedBorderBox>
        </StyledSection>
    );
};
