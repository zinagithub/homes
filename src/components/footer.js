import React from 'react';


function Footer() {
  const flexDisplay = { display: 'flex' };
  const dir = { flexDirection: 'column' };
  const marge = {margin: '50px'};
  const margeBottom1 = {marginBottom : '10px'};
  const margeBottom2 = {marginBottom : '30px'};
  return (
    <div className="container" style={ marge }>
      <div className="row">
        <div className="col-xs-6 col-md-3" >
          <div style={margeBottom2}>
            <h4>RealAdvisor</h4>
          </div>
          <div style={flexDisplay, dir}>
            <div>
              <span>co AI Partners SA</span>
             </div>
             <div>
              <span>Avenue Louis-Casai 86A</span>
             </div>
             <div>
              <span>1216 Cointrin</span>
             </div>
             <div>
              <span>Suisse</span>
             </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-3" >
          
            <h5 style={margeBottom2}>Company</h5>
          
          <div style={flexDisplay, dir}>
            <div style={margeBottom1}>
              <span >Appraise</span>
             </div>
             <div style={margeBottom1}>
              <span >Sell</span>
             </div>
             <div style={margeBottom1}>
              <span >Mortgage</span>
             </div>
             <div style={margeBottom1}>
              <span >How does it work?</span>
             </div>
          </div>
        </div>

        <div className="col-xs-6 col-md-3">
          
            <h5 style={margeBottom2}>About us</h5>
          
          <div style={flexDisplay, dir}>
            <div style={margeBottom1}>
              <span>Who are we?</span>
             </div>
             <div style={margeBottom1}>
              <span>Jobs</span>
             </div>
             <div style={margeBottom1}>
              <span>Terms & Services</span>
             </div>
             <div style={margeBottom1}>
              <span>Privacy Policy</span>
             </div>
          </div>
        </div>
        

        <div className="col-xs-6 col-md-3">
          
            <h5 style={margeBottom2}>Contact</h5>
          
          <div style={flexDisplay, dir}>
            <div style={margeBottom1}>
              <span>+123456789012</span>
             </div>
             <div>
              <span>help@realadvisor.ch</span>
             </div>
             
          </div>
        </div>
    </div>
    </div>
    
  );
}

export default Footer;
