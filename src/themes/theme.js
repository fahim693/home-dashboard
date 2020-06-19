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
            },
            caption:{
                marginTop: "-0.1rem"
            }
        }
        
    }
});

export default Theme;