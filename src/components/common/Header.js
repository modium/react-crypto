import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Search from './Search';
import './Header.css';

const containerStyle = {
	// fontSize: '40px'
}

const Header = () => {
  return (
    <div className='Header' style={containerStyle}>
			<Link to='/'>
				<img src={logo} alt='logo' className='Header-logo' />
			</Link>

			<Search />
		</div>
  )
}

export default Header;
