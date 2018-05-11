// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';

// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';

// material-ui components
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

// local files for theming & style
import { gridStyle } from '../styles/layout';

// local files other

const Home = (props) => {
    const { classes } = props;
    return (

        <Grid container className={classes.root} spacing={16}>
            <Grid item xs={6}>
                <Paper>
                    Some content on the left
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>
                    Some content on the right
                </Paper>
            </Grid>
        </Grid>
    );
};

Home.propTypes = {
    classes: PropTypes.shape().isRequired
};

export default withStyles(gridStyle)(Home);
