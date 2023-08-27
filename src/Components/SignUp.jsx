
import React from 'react';
import TextField from '@mui/material/TextField';

function SignUp() {
    return (
        <>
            <div className='SignUPbackground rounded'>
            </div>
            <div className="position-relative Signinpage ">
                <div className="bg-white border rounded color2 SignUPdiv1">
                    <h3 className='mt-3'>
                        Join us today
                    </h3>
                    <div className='container '>
                        Enter your email and password to register
                    </div>
                </div>
                <div className="SignUPdiv2 bg-white border-0 rounded d-flex flex-column">
                    <TextField className='my-1' id="standard-basic" label="Name" variant="standard" />
                    <TextField className='my-1' id="standard-basic" label="Email" variant="standard" />
                    <TextField className='my-1' id="standard-basic" label="Password" variant="standard" />
                    <div className="form-check my-4">
                        <input className="form-check-input" type="checkbox" id="appflexSwitchCheckChecked" />
                        <label className="form-check-label" >
                            I Agree the <a href="">Terms and Conditions</a>
                        </label>
                    </div>
                    <div className='d-grid '>
                        <button className='btn btn-primary btn-sm '>SIGN IN</button>
                    </div>
                    <div className="text-center my-2">
                        Don't have an account? <a href="">Sign up</a>
                    </div>
                </div>
            </div>

        </>

    );
}

export default SignUp;
