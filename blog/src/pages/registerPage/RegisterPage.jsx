import "./registerPage.css"

export default function RegisterPage() {
    return (
        <div className="registerPage">
            <span className="registerTitle">Sign Up</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username"/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your Email"/>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password"/>
                <button className="registerButton">Register</button>
            </form>
            <button className="lregisterButton">Login</button>
        </div>
    )
}
