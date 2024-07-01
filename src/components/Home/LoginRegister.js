import React, {useState} from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './LoginRegister.css';

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };
    
    const loginLink = () => {
        setAction('');
    };

    

  return (
    <div className="body">
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form onSubmit="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required/>
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" name="user" placeholder='Username' required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" name="email" placeholder='Email' required/>
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" name="pass" placeholder='Password' required/>
                        <FaLock className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" name="cpass" placeholder='Confirm Password' required/>
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />I agree to the <b>Terms of Use & Privacy Policy</b>
                        </label>
                        
                    </div>

                    <button type="submit" name="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default LoginRegister