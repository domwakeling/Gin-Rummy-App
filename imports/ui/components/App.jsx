// react & meteor imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// material-ui imports for theming & style
import CssBaseline from 'material-ui/CssBaseline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// material-ui components

// local files for theming & style
import theme from '../styles/theme';

// local files other
import BrandAppBar from './BrandAppBar.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NoMatch from '../pages/NoMatch.jsx';

const App = () => (
    <Router>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <BrandAppBar title="Gin Rummy" />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NoMatch} />
            </Switch>
        </MuiThemeProvider>
    </Router>
);

export default App;
