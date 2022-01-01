import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarElement">
                <span className="sidebarTitle">About Me</span>
                <img src="static/aboutUs.png" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ipsa reprehenderit pariatur, illo atque earum maiores odio iusto quibusdam repellendus esse rem commodi quo accusantium quaerat consequuntur! Consectetur, numquam!
                </p>
            </div>
            <div className="sidebarElement">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListElement">Life</li>
                    <li className="sidebarListElement">Music</li>
                    <li className="sidebarListElement">Style</li>
                    <li className="sidebarListElement">Sports</li>
                    <li className="sidebarListElement">Cinema</li>
                    <li className="sidebarListElement">Tech</li>
                </ul>
            </div>
            <div className="sidebarElement">
                <span className="sidebarTitle">Follow Us!</span>
                <div className="sidebarSocial">
                    <i className= "sidebarIcon fab fa-facebook-square"></i>
                    <i className= "sidebarIcon fab fa-twitter-square"></i>
                    <i className= "sidebarIcon fab fa-pinterest-square"></i>
                    <i className= "sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
