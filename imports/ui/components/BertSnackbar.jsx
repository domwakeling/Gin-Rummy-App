// react & meteor imports
import React from 'react';
import PropTypes from 'prop-types';
// material-ui imports for theming & style
// material-ui components
import Snackbar from 'material-ui/Snackbar';
// local files for theming & style
// // local files other

const BertSnackbar = (props) => {
    const { closeSnackbar, open, message } = props;
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={1500}
            open={open}
            onClose={closeSnackbar}
            ContentProps={{
                'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{message}</span>}
        />
    );
};

BertSnackbar.propTypes = {
    closeSnackbar: PropTypes.func.isRequired,
    open: PropTypes.bool,
    message: PropTypes.string
};

BertSnackbar.defaultProps = {
    open: false,
    message: ''
};

export default BertSnackbar;
