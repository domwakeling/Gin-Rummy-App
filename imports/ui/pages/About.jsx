import React from 'react';

import Typography from 'material-ui/Typography';

import ContentPanel from '../components/ContentPanel.jsx';

const About = () => (
    <div>
        <Typography variant="headline">About</Typography>
        <ContentPanel>
            <Typography variant="body1">What content do we have here?</Typography>
        </ContentPanel>
    </div>
);

export default About;
