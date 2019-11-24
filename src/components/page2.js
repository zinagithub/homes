import React from 'react';
import Home2 from './images/ralph-kayden-2d4lAQAlbDA-unsplash.jpg';
import Home3 from './images/jason-briscoe-AQl-J19ocWE-unsplash.jpg';
import Home4 from './images/patrick-perkins-3wylDrjxH-E-unsplash.jpg';

import './page2.css';

class Page2 extends React.Component {
  render() {
    return (
      <div className= 'page2'>
        <div className="row help-title">
           <div>
              <span>We help you make</span>
           </div>   
           <span>better deals.</span>
        </div>
        <div className = "row">
          <div className= 'col-sm-6'>
             <div className= 'row '>
               <img src={Home2} alt='jason-briscoe-AQl-J19ocWE-unsplash.jpg' 
                width="400"/>
             </div>
             <div className= 'row two-img'>
               <img src={Home3} alt='jason-briscoe-AQl-J19ocWE-unsplash.jpg' 
               className='img-responsive' width="200" />
               <img src={Home4} alt='jason-briscoe-AQl-J19ocWE-unsplash.jpg' 
                width="300" className= 'img2'/>
             </div>
          </div>
          <div className= 'col-sm-6 text-article1'>
              <h1>Sell your home</h1>
              <p>Sell your home for more money in less time.</p>
              <div className="text1">
                <span>We have carfully selected the top 1% of brokers in </span>
                <span>Switzerland and supplied them tech tools to help </span>
                <span>you close your deal as quickly as possible </span>
              </div>
              <button className= 'btn btn-default btn-primary find-how-to-sell'>Find out how to sell your proprety</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Page2;
