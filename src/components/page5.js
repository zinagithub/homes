import React from 'react';
import smartPhone from './images/austin-distel-uPK2TbJlvMQ-unsplash (1).jpg';
import './page2.css';


function Page5() {
  return (
    <div className="container">
      <div className="row">
        <img
          src={smartPhone}
          alt="austin-distel-uPK2TbJlvMQ-unsplash.jpg"
          className="img-responsive"
        />
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="text1 ">
            <span>We also manage private sales of</span>
            <span>properties that are not published</span>
            <span>online and include properties within</span>
            <span>Geneva s development zones.</span>
          </div>
          <button className="btn btn-default btn-primary find-how-to-sell">Find me the best mortgage deal</button>
        </div>
        <div className="col-xs-12 col-sm-6">  
          <div className="text1 ">
            <span>To that end, we will help you assess</span>
            <span>the right price to pay and also make</span>
            <span>sure that you get the best financing</span>
            <span>avaible in the market.</span>
          </div>
        <button className="btn btn-default btn-primary find-how-to-sell">Value my property</button>

        </div>
      </div>
    </div>
  );
}

export default Page5;
