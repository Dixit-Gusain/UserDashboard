
import React from 'react';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {

    return (
        <>
            <div className='SignINbackground m-0'>
                
                <div className="Signinpage ">
                    <div className="bg-white rounded color2 Signindiv1">
                        <h3 className='mt-3'>
                            Sign in
                        </h3>
                        <div className='container mt-4x'>
                            <FacebookIcon className='mx-3' />
                            <GitHubIcon className='mx-3' />
                            <GoogleIcon className='mx-3' />
                        </div>
                    </div>
                    <div className="Signindiv2 bg-white rounded d-flex flex-column ">
                        <TextField className=' my-2 ' size="small" label="Email" />
                        <TextField className=' my-2' size="small" label="Password" />

                        <div className="form-check form-switch my-3">
                            <input className="form-check-input" type="checkbox" id="appflexSwitchCheckChecked" />
                            <label className="form-check-label" >
                                Remember me
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
            </div>
        </>

    );
}

export default SignIn;
