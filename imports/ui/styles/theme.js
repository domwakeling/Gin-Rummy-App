import { createMuiTheme } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: { main: orange[500], light: orange[100] },
        secondary: { main: blue[500] }
    }
});

export default theme;
