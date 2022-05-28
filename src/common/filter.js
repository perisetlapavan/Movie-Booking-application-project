import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { genres } from '../assets/genre';
import { artists } from '../assets/artists';
// import { render } from '@testing-library/react';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default class Filter extends React.Component {
  // const [Genre, setGenre] = React.useState('');
  state={
    Genre:'',
    Artists:''
  }

   handleChange1 = (event) => {
    // setGenre(event.target.value);
    this.setState({Genre:event.target.value});
    // console.log(event.target.value);
  };

  // const [Artists, setArtists] = React.useState('');

   handleChange2 = (event) => {
    // setArtists(event.target.value);
    this.setState({Artists:event.target.value});
    // console.log(event.target.value);
  };

  handleInputChange = event => {
    this.props.onDataChange([]);
  }

  render(){
  return (
    <Card sx={{ maxWidth: 240 }} style={{ float: 'right', padding: '20px', margin: '16px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} variant="h3" color="text.secondary" gutterBottom>
          FIND MOVIES BY:
        </Typography><br />

        <FormControl>
          <TextField id="standard-basic" label="Movie Name" variant="standard" />
        </FormControl>
        <br />
        <br />

        <FormControl fullWidth variant="standard" >
          <InputLabel id="demo-simple-select-standard-label" >Genre</InputLabel><br />
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={this.Genre}
            label="Genre"
            onChange={this.handleChange1}
          >
            {genres.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}

          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth variant="standard" >
          <InputLabel id="demo-simple-select-standard-label" >Artists</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={this.Artists}
            label="Artists"
            onChange={this.handleChange2}
          >
            {artists.map((item) => (
              <MenuItem value={item.id}>{item.first_name}  {item.last_name}</MenuItem>
            ))}

          </Select>
        </FormControl>
        <br />
        <br />
        <br />
        <FormControl>
          <InputLabel shrink={true}>Release Date Start</InputLabel>
          <br />
          <TextField id="standard-basic" type="date" variant="standard" />
        </FormControl>

        <br />
        <br />
        <br />
        <FormControl>
          <InputLabel shrink={true}>Release Date End</InputLabel>
          <br />
          <TextField id="standard-basic" type="date" variant="standard" />
        </FormControl>

      </CardContent>

      <CardActions>
        {/* <Button variant="contained" onClick={this.props.filter}>Apply</Button> */}
        <Button variant="contained" onClick={this.handleInputChange}>Apply</Button>
      </CardActions>
    </Card>
  );
}
}
