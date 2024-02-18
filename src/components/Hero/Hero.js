import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a new Software Engineer and enjoy coding. I have made projects using JavaScript, React, Next.js, Tailwind, CSS, Html, and using APIs. Projects I want to build in the future will consit of Python and MySQL.
      </SectionText>

      {/* button that can lead to my resume or even just about page. */}
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;