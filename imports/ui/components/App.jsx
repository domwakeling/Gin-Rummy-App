// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// material-ui imports for theming & style
import CssBaseline from 'material-ui/CssBaseline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles } from 'material-ui/styles';
// material-ui components
// local files for theming & style
import theme from '../styles/theme';
import layoutStyle from '../styles/layout';
// // local files other
import BrandAppBar from './BrandAppBar.jsx';
import SideDrawer from './SideDrawer.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NoMatch from '../pages/NoMatch.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: window.innerWidth > 600 };
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }

    handleDrawerToggle = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };

    render() {
        const { classes } = this.props;
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className={classes.root}>
                        <BrandAppBar
                            title="Gin Rummy"
                            toggleHandler={this.handleDrawerToggle}
                        />
                        <SideDrawer
                            open={this.state.drawerOpen}
                            toggleHandler={this.handleDrawerToggle}
                        />
                        <div className={classes.content}>
                            <div className={classes.toolbar} />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route component={NoMatch} />
                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

App.propTypes = {
    classes: PropTypes.shape().isRequired
};

export default withStyles(layoutStyle)(App);
