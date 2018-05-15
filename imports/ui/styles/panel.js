/* eslint-disable import/prefer-default-export */

import orange from 'material-ui/colors/orange';

export const panelStyle = (theme) => {
    const space = theme.spacing.unit;
    return ({
        panel: {
            padding: space * 2,
            backgroundColor: orange[50],
            minHeight: 150
        }
    });
};
