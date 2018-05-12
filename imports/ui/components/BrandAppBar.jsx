// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';
// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';
// material-ui components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// local files for theming & style
import layoutStyle from '../styles/layout';
// local files other

const BrandAppBar = (props) => {
    const { classes, title, toggleHandler } = props;
    return (
        <AppBar position="absolute" color="primary" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleHandler}
                    className={classes.navIconHide}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

BrandAppBar.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.shape().isRequired,
    toggleHandler: PropTypes.func.isRequired
};

export default withStyles(layoutStyle)(BrandAppBar);
