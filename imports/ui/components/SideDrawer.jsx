// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';
// material-ui components
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// local files for theming & style
import layoutStyle from '../styles/layout';
// local files other
import menuData from './data/menu';

const SideDrawer = (props) => {
    const { classes, open, toggleHandler } = props;
    const drawerContent = (
        <div>
            <List>
                {menuData.map(menuItem => (
                    <ListItem button component="a" href={menuItem.link} key={menuItem.id}>
                        <ListItemIcon>
                            <menuItem.icon />
                        </ListItemIcon>
                        <ListItemText primary={menuItem.label} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Drawer
            variant="permanent"
            open={open}
            onClose={toggleHandler}
            classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
        >
            <div className={classes.toolbar} />
            {drawerContent}
        </Drawer>
    );
};

SideDrawer.propTypes = {
    classes: PropTypes.shape().isRequired,
    open: PropTypes.bool,
    toggleHandler: PropTypes.func.isRequired
};

SideDrawer.defaultProps = {
    open: false
};

export default withStyles(layoutStyle)(SideDrawer);
