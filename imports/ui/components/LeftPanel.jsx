// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';

// material-ui components
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

// local files for theming & style
import { panelStyle } from '../styles/panel';

const LeftPanel = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <Typography variant="title">
                Left header
            </Typography>
            <Typography variant="body1">
                Left content goes here
            </Typography>
        </Paper>
    );
};

LeftPanel.propTypes = {
    classes: PropTypes.shape().isRequired
};

export default withStyles(panelStyle)(LeftPanel);
