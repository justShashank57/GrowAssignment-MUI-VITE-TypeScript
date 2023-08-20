import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Table from "../assets/Table";
import DropDownList from '../assets/List';
export default function API(){
    return(
        <>
          <CssBaseline/>
                <Box maxWidth="lg" sx={{ display: 'flex', flexDirection:'column', gap:'3rem' }}>
                    <h2>Grid-Data</h2>
                   <Table/>
                   <h2>Dropdown List</h2>
                   <DropDownList/>
                </Box>
        </>
    )
}