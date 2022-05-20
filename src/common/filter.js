import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };

export default function Filter() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{border: '0.5px solid', padding :'20px' ,width:'250px', float: 'right' , boxShadow: '5px'}}>
      <h3>FIND MOVIES BY:</h3><br />      
      <Input placeholder="Movie Name" inputProps={ariaLabel} /><br /><br />
      <Input placeholder="Genre" inputProps={ariaLabel} /><br /><br />
      <Input placeholder="Artists" inputProps={ariaLabel} /><br /><br />
      <h5>Release Date Start</h5>
      <Input type="Date" inputProps={ariaLabel} /><br />
      <h5>Release Date End</h5>
      <Input type="Date" inputProps={ariaLabel} /><br /><br />
      <Button variant="contained">Apply</Button>
      </div>
    </Box>
  );
}
