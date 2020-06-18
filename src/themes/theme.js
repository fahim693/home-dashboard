import { createMuiTheme } from '@material-ui/core/styles';
const Theme = createMuiTheme({
    overrides: {
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: '#fff'
                }
            }
        }
    }
});

export default Theme;