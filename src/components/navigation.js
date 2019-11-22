import React from 'react';
import {Link} from 'react-router-dom';
/*import './navigation.css'*/

class Navigation extends React.Component {

  render() {

  	const arrLinks = ['Home','About','Skills','Projects','Contact'];
    const navColor = {color : '#212529'};
    const displayLinks = arrLinks.map((val, index) => {
    	return <Link to = {'/' + val} style = {navColor} ><li key = {index} >{val}</li></Link>
    }

    ); 
  	return (
  		 <nav>
  		    <div className = 'logo'>logo</div>
          <ul className="hidden-xs">
            {displayLinks}
          </ul>
          <div className = 'lang'>En</div>
        </nav>
  		);
  }

}

export default Navigation;
