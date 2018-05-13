// react & meteor imports
import React from 'react';
// import PropTypes from 'prop-types';

// material-ui imports for theming & style
import { withStyles } from 'material-ui/styles';

// material-ui components
// import Grid from 'material-ui/Grid';

// local files for theming & style
import { layoutStyle } from '../styles/layout';

// local files other
// import LeftPanel from '../components/LeftPanel.jsx';
// import RightPanel from '../components/RightPanel.jsx';

const Home = () => <div>Just some content here please dear god</div>;
// <Grid container className={classes.contentRoot}>
//     <Grid item xs={12}>
//         <Grid container alignItems="stretch">
//             <Grid item xs={6}>
//                 <LeftPanel />
//             </Grid>
//             <Grid item xs={6}>
//                 <RightPanel />
//             </Grid>
//         </Grid>
//     </Grid>
// </Grid>
// };

// Home.propTypes = {
//     classes: PropTypes.shape().isRequired
// };

export default withStyles(layoutStyle)(Home);
