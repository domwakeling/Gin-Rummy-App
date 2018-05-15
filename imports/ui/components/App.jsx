// react & meteor imports
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
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
import BertSnackbar from './BertSnackbar.jsx';
import SideDrawer from './SideDrawer.jsx';
import PasswordDialog from './PasswordDialog.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NoMatch from '../pages/NoMatch.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: window.innerWidth > 599,
            dialogOpen: false,
            snackbarOpen: false,
            snackbarMessage: ''
        };
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.handleLogInOutButton = this.handleLogInOutButton.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
        this.presentSnackbarMessage = this.presentSnackbarMessage.bind(this);
    }

    handleDrawerToggle = (e) => {
        e.preventDefault();
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };

    handleLogInOutButton = (e) => {
        e.preventDefault();
        if (this.props.user) {
            Meteor.logout();
            this.presentSnackbarMessage('Logged out');
        } else {
            this.setState({ dialogOpen: true });
        }
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    presentSnackbarMessage = (message) => {
        this.setState({ snackbarOpen: true, snackbarMessage: message });
    }

    handleSnackbarClose = () => {
        this.setState({ snackbarOpen: false });
    }

    render() {
        const { classes, user } = this.props;
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className={classes.root}>
                        <BrandAppBar
                            title="Gin Rummy"
                            toggleHandler={this.handleDrawerToggle}
                            logInOutHandler={this.handleLogInOutButton}
                            user={user}
                        />
                        <PasswordDialog
                            bert={this.presentSnackbarMessage}
                            open={this.state.dialogOpen}
                            closeDialog={this.handleDialogClose}
                        />
                        <SideDrawer
                            open={this.state.drawerOpen}
                            toggleHandler={this.handleDrawerToggle}
                        />
                        <BertSnackbar
                            open={this.state.snackbarOpen}
                            closeSnackbar={this.handleSnackbarClose}
                            message={this.state.snackbarMessage}
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
    classes: PropTypes.shape().isRequired,
    user: PropTypes.shape()
};

App.defaultProps = {
    user: null
};

export default withStyles(layoutStyle)(withTracker(() => (
    {
        user: Meteor.user()
    }))(App));
