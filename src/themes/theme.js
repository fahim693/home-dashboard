import { createMuiTheme } from '@material-ui/core/styles';
const Theme = createMuiTheme({
    overrides: {
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: '#fff'
                }
            }
        },
        MuiTablePagination:{
            input:{
                fontSize: 17
            }
        }
    }
});

export default Theme;