import React from 'react';
import Home2 from './images/ralph-kayden-2d4lAQAlbDA-unsplash.jpg';
import Home3 from './images/jason-briscoe-AQl-J19ocWE-unsplash.jpg';
import Home4 from './images/patrick-perkins-3wylDrjxH-E-unsplash.jpg';
import './page6.css';
import './page2.css';


function Page6() {
  return (
    <div className= 'page2 container'>
        
        <div className = "row">
          <div className= 'col-sm-6'>
             <div className= 'row card'>
               <h5>Superbe attique à saisir...</h5>
               <p>1207 Genève</p>
               <h5>Penthouse 6 rooms 250m²</h5>
             </div>
             <div className= 'row two-img'>
               <img src={Home3} alt='jason-briscoe-AQl-J19ocWE-unsplash.jpg' 
               className='img-responsive' width="200"/>
               <img src={Home4} alt='jason-briscoe-AQl-J19ocWE-unsplash.jpg' 
                width="300" className= 'img2'/>
             </div>
          </div>
          <div className= 'col-sm-6 text-article1'>
              <h1>Remortgage</h1>
              
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

export default Page6;
