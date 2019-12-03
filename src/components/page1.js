import React from 'react';
import Home1 from './images/jesse-roberts-561igiTyvSk-unsplash.jpg';
import './page1.css';

class Page1 extends React.Component {
    render() {
      return (
			<div className = 'page1 row'>
			  <div className = 'up-part col-xs-12'>
			    <div className = 'inner-part'>
			       <p className='question1'>How much my</p>
			       <p className='question2'>home worth?</p>
			       <div className='row down-inner-part'>
			         <button className = 'btn btn-default col-xs-8'>Enter your adress...</button>
			         <button className= 'btn btn-default btn-primary col-xs-4'>Apraise</button>
			       </div>
			       
                </div>
              </div>
              <div className = 'down-part row'>
                 <img src={Home1} alt='jesse-roberts-561igiTyvSk-unsplash.jpg' />
                 
              </div>
            </div>
			);
	}
}
export default Page1;
