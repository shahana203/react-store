import React from 'react'

function Footer() {
  return (
    <footer id='contact' >
        <div className='contact'>
        <h2>Contact Us</h2>
        
          <p className=''> Email: support@mystore.com</p>
          <p>Phone: +91 98765 43210</p> 
          </div>
      <p className="footer">&copy; {new Date().getFullYear()} MY Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer