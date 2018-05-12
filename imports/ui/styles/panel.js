/* eslint-disable import/prefer-default-export */

export const panelStyle = (theme) => {
    const space = theme.spacing.unit;
    return ({
        paper: {
            padding: space * 2,
            marginTop: space * 3,
            marginBottom: space * 3,
            marginLeft: space * 2,
            marginRight: space * 2
        }
    });
};
