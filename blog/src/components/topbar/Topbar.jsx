import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() 
{
    const checkUser = true;

    return (
        <div className='top'>
            <div className="topLeft">
                <i className= "icon fab fa-facebook-square"></i>
                <i className= "icon fab fa-twitter-square"></i>
                <i className= "icon fab fa-pinterest-square"></i>
                <i className= "icon fab fa-instagram-square"></i>
            </div>
            <div className="topMiddle">
                <ul className="topListContainer">
                    <li className='topListItem'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">About</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">Contact</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write">Write</Link>
                    </li>
                    <li className='topListItem'>
                        {checkUser && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    checkUser ? (<Link className='link' to="/Settings"><img className='topImage'src="static/model.png" alt="" /></Link>) : (
                        <ul className='topListContainer'>
                            <li className='topListItem'>
                                <Link className='link' to="/loginPage">Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className='link' to="/registerPage">Register</Link>
                            </li>
                        </ul>
                    ) 
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>         
        </div>
    )
}
