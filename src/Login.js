import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Login() {
    return (
      <div className="row">
          <div className="col-lg-4">

          </div>

              <div className="col-lg-4 regDiv">
                    <h1 className="text-center">Sign In</h1><br/>

               <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>

                <div className="form-group">
                    <Button className="mx-auto d-block" variant="primary">Login</Button> 
                </div>

                <div className="form-group text-center">
                        <Link to="/Register"><b>Click here to Sign Up</b></Link>
                </div>

              <div className="col-lg-4">

              </div>
          </div>
       
      </div>
    );
  }
  export default Login;