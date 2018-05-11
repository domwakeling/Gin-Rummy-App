// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';

// material-ui components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// local files for theming & style

// local files other

const styles = {
    root: {
        flexGrow: 1
    }
};

const BrandAppBar = (props) => {
    const { classes, title } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

BrandAppBar.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(BrandAppBar);
