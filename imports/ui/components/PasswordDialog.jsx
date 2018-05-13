// react & meteor imports
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
// material-ui imports for theming & style
// material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions
} from 'material-ui/Dialog';
// local files for theming & style
import { changeButton } from '../styles/dialog';
// // local files other

const modeEnum = {
    SIGNIN: 0,
    SIGNUP: 1
};

const modeTitle = ['Sign In', 'Create Account'];

class PasswordDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: modeEnum.SIGNIN,
            emailValid: false,
            password1Valid: false,
            password2Valid: false
        };
        this.toggleState = this.toggleState.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.dialogSubmitHandler = this.dialogSubmitHandler.bind(this);
    }

    toggleState = (e) => {
        e.preventDefault();
        this.setState({ mode: Math.max(0, 1 - this.state.mode) });
    }

    emailChangeHandler = (e) => {
        const email = e.target.value;
        const emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        this.setState({ emailValid: email && emailReg.test(email) });
    }

    passwordChangeHandler = () => {
        const p1 = document.getElementById('password1').value;
        const p2Obj = document.getElementById('password2');
        if (p2Obj) {
            const p1Valid = p1 !== '';
            const p2Valid = p2Obj.value === p1 && p1 !== '';
            this.setState({ password1Valid: p1Valid, password2Valid: p2Valid });
        } else {
            this.setState({ password1Valid: p1 !== '' });
        }
    }

    dialogSubmitHandler = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password1').value;
        this.props.closeDialog();
        if (this.state.mode === modeEnum.SIGNIN) {
            Meteor.loginWithPassword(email, password, (err) => {
                if (err) {
                    const htmlError = `ERROR: ${err.reason ? err.reason : 'Unknown error'}`;
                    this.props.bert(htmlError);
                } else {
                    this.props.bert('Logged in');
                }
            });
        } else {
            Accounts.createUser({ email, password }, (err) => {
                if (err) {
                    const htmlError = `ERROR: ${err.reason ? err.reason : 'Unknown error'}`;
                    this.props.bert(htmlError);
                } else {
                    // if no error, success! so login, send verification email
                    Meteor.loginWithPassword(email, password, (err2) => {
                        if (err2) {
                            this.props.bert(err2);
                        } else {
                            Meteor.call('accounts.verify', Meteor.userId(), email);
                            this.props.bert('Account created');
                        }
                    });
                }
            });
        }
    }

    render() {
        const { closeDialog, open } = this.props;
        return (
            <Dialog
                open={open}
                onClose={closeDialog}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    {modeTitle[this.state.mode]}
                    <Button
                        id="modeToggleButton"
                        color="primary"
                        style={changeButton}
                        onClick={this.toggleState}
                    >
                        {modeTitle[Math.max(0, 1 - this.state.mode)]}
                    </Button>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {this.state.mode === modeEnum.SIGNIN ? (
                            `Please enter your email address and password to sign in, or select
                            'Create Account' if you do not have an account yet.`
                        ) : (
                            `Please enter your email address and password to create an account,
                            or select 'Sign In' if you already have one.`
                        )}
                    </DialogContentText>
                    <TextField
                        onChange={this.emailChangeHandler}
                        error={!this.state.emailValid}
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        required
                        onChange={this.passwordChangeHandler}
                        error={!this.state.password1Valid}
                        margin="dense"
                        id="password1"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    {this.state.mode === modeEnum.SIGNUP && (
                        <TextField
                            required
                            onChange={this.passwordChangeHandler}
                            error={!this.state.password2Valid}
                            margin="dense"
                            id="password2"
                            label="Confirm password"
                            type="password"
                            fullWidth
                        />)
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button
                        id="signInButton"
                        color="primary"
                        onClick={this.dialogSubmitHandler}
                        disabled={!(this.state.emailValid && this.state.password1Valid &&
                            (this.state.mode === modeEnum.SIGNUP ? this.state.password2Valid : true)
                        )}
                    >
                        {modeTitle[this.state.mode]}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

PasswordDialog.propTypes = {
    bert: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired,
    open: PropTypes.bool
};

PasswordDialog.defaultProps = {
    open: false
};

export default PasswordDialog;
