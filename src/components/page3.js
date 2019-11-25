import React from 'react';
import land from './images/rayyu-maldives-photographer-Qv1HnAeoqHs-unsplash.jpg';
import './page2.css';


function Page3() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 text-article1">
        <h1>Sell your land</h1>
        <p>We are always on the lookout land to develop.</p>
        <div className="text1">
          <span>We will provide you with an accurate valuation and</span>
          <span>support you throughout the sales/co-development</span>
          <span>process.</span>
        </div>
        <button className="btn btn-default btn-primary find-how-to-sell">Find out how to sell your land</button>

      </div>
      <div className="col-sm-12 col-md-6">
        <div>
          <img
            src={land}
            alt="rayyu-maldives-photographer-Qv1HnAeoqHs-unsplash.jpg"
            width="400"
          />
        </div>
      </div>
    </div>
  );
}

export default Page3;
