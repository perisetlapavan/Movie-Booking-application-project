import React from 'react';
import { ReactComponent as YourSvg } from '../../logo.svg';
import './Header.css';
import Button from '@mui/material/Button';

class Header extends React.Component {
    render() {
      if(this.props.extra==="false"){
      return <div className="head">
        <YourSvg />
      </div>;}
      else{
        return <div className="head" style={{display:"flex" , justifyContent:"space-between"}}>
        <YourSvg />
        <Button variant="contained" style={{width:"10%"}} >Book Show</Button>
      </div>;
      }
    }
  }

  export default Header;