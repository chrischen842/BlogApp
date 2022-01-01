import './topbar.css'

export default function Topbar() {
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
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className='topImage'
                    src="static/model.png" 
                    alt="" 
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>
    )
}
