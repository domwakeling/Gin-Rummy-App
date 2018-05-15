// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';

// material-ui components
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';

// local files for theming & style
import { panelStyle } from '../styles/panel';

const ContentPanel = (props) => {
    const { classes, children } = props;
    return (
        <Paper className={classes.panel}>
            {children}
        </Paper>
    );
};

ContentPanel.propTypes = {
    children: PropTypes.shape().isRequired,
    classes: PropTypes.shape().isRequired
};

export default withStyles(panelStyle)(ContentPanel);
