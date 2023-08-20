import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { List, ListItemButton, Collapse } from '@mui/material';

export default function ListOne() {
  const [checked, setChecked] = React.useState<[boolean, boolean]>([true, false]);
  const [openOne, setOpenOne] = React.useState<boolean>(true);

  const handleClickOne = () => {
    setOpenOne(!openOne);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Customer Success"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <List>
      <ListItemButton sx={{display:'flex',justifyContent:'space-between'}} onClick={handleClickOne}>
        <FormControlLabel
          label="Customer Service"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {openOne ? (
          <ExpandLess sx={{ marginLeft: 'auto' }} />
        ) : (
          <ExpandMore sx={{ marginLeft: 'auto' }} />
        )}
      </ListItemButton>

      <Collapse in={openOne} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </List>
  );
}
