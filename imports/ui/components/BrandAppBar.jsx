// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';
// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';
// material-ui components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// local files for theming & style
import layoutStyle from '../styles/layout';
// local files other

const BrandAppBar = (props) => {
    /* eslint-disable object-curly-newline */
    const { classes, title, toggleHandler, user } = props;

    return (
        <AppBar position="absolute" color="primary" className={classes.appBar}>
            <Toolbar>
                {window.innerWidth > 599 ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleHandler}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div style={{ width: '68px' }} />
                )}
                <Typography
                    variant="title"
                    color="inherit"
                    className={classes.appBarTitle}
                >
                    {title}
                </Typography>
                <Button id="accountsButton" color="inherit">
                    {user ? 'Logout' : 'Login' }
                </Button>
            </Toolbar>
        </AppBar>
    );
};

BrandAppBar.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.shape().isRequired,
    toggleHandler: PropTypes.func.isRequired,
    user: PropTypes.shape()
};

BrandAppBar.defaultProps = {
    user: null
};

export default withStyles(layoutStyle)(BrandAppBar);
