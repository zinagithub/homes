import React from 'react';
import Home1 from './images/jesse-roberts-561igiTyvSk-unsplash.jpg';
import './page1.css';

class Page1 extends React.Component {
    render() {
      return (
			<div className = 'page1'>
			  <div className = 'up-part'>
			    <div className = 'inner-part'>
			       <h1>How much my</h1>
			       <h1>home worth?</h1>
			       <div className='row down-inner-part'>
			         <button className = 'btn btn-default col-sm-8'>Enter your adress...</button>
			         <button className= 'btn btn-default btn-primary col-sm-4'>Apraise</button>
			       </div>
			       
                </div>
              </div>
              <div className = 'down-part'>
                 <img src={Home1} alt='jesse-roberts-561igiTyvSk-unsplash.jpg' />
                 
              </div>
            </div>
			);
	}
}
export default Page1;
