import { Link } from 'react-router-dom';
import "./loginPage.css"

export default function LoginPage() 
{
    return (
        <div className='loginPage'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your Email"/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="rloginButton">
                <Link className='link' to="/registerPage">Sign Up</Link>
            </button>
        </div>
    )
}
