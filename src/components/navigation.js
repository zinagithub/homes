import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends React.Component {
  render() {
    const arrLinks = ['Valuation','Sell','Buy','Mortgage','More'];
    const navColor = { color : '#212529' };
    const displayLinks = arrLinks.map((val, index) => {
      return <Link to = {'/' + val} style = {navColor} ><li key = {index} >{val}</li></Link>
    }

    ); 
  	return (
  		 <nav>
  		    <div className = 'logo'>
            <div className = 'logo-p1'>
                <div className = 'in-logo'>
                </div>
            </div>
            <h5>RealAdvisor</h5>
          </div>
          <ul className="hidden-xs">
            {displayLinks}
          </ul>
          <div className = 'lang'>
          En
          <img src="https://img.icons8.com/android/24/000000/sort-down.png" width='10'/>
          </div>
        </nav>
  		);
  }

}

export default Navigation;
