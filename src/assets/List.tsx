import { Box } from "@mui/material";
import ListOne from "./SubListOne";
import ListTwo from "./subListTwo";

export default function DropDownList(){
    
    return(
        <>
        <Box sx={{ height: 400, width: '100%' }}>
              <ListOne/>
              <ListTwo/>
        </Box>
        </>
    )
}