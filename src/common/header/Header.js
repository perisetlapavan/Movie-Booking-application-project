import React from 'react';
import { ReactComponent as YourSvg } from '../../logo.svg';
import './Header.css'
class Header extends React.Component {
    render() {
      return <div className="head">
        <YourSvg />
      </div>;
    }
  }

  export default Header;