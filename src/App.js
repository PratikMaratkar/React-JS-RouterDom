import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

function App() {
  return (
    <div className='text-center text-dark regi_div'>
      <h1>This is home page</h1><br/>
      <Link to="/Registration"><b>Click here to Sign Up </b></Link>
      <br/>
      <Link to="/Login"><b>Click here to Sign In </b></Link>
    </div>
  )
}
export default App;