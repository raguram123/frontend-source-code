import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../Context/LoginContext';
import UserContext from '../Context/UserContext';

function Login() {
    const userdata = useContext(UserContext)
    const logindata = useContext(LoginContext);

    const navigate = useNavigate();
    return (
        <section className="vh-100 mt-2 pt-2" >

            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/93bea8ef802a988ed8ab44889dc82b83/e545c32d-0242-43ff-ad27-f3269784949f_rw_600.gif?h=17929231b0f2a1c4afd03effd7443aa7"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <h1 style={{color : "whitesmoke" , textAlign : "center" , paddingBottom: "50px"}}>Welcome to TrackZee</h1>
                        <form>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a username" onChange={(event) => userdata.setUsername(event.target.value)} />
                                <label className="form-label" For="form3Example3">Username</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" For="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" For="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex ms-6 size-large" >
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(true);
                                    navigate("/portal/dashboard")
                                }} type="button" className="btn  btn-info mt-2  "
                                    style={{ marginRight : "10.5rem" , paddingRight : "3.5rem" ,textAlign : "center" }}>
                                    
                
                                   <h4>Login</h4>
                                </button>
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(true);
                                    navigate("/portal/dashboard")
                                }} type="button" className="btn  btn-dark mt-2  "
                                    style={{ marginRight : "10.5rem" , paddingRight : "3rem" ,textAlign : "center" }}>
                                    
                
                                   <h4>Signup</h4>
                                </button>
                               
                         
                               
                         
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Login
