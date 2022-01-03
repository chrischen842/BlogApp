import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsContainer">
                <div className="settingsTitle">
                    <span className="settingsUpdateAcc">Update Account</span>
                    <span className="settingsDeleteAcc">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePic">
                        <img src="static/scenery.png" alt="" />
                        <label htmlFor="input">
                            <i className="settingsProfilePicIcon fas fa-user"></i>
                        </label>
                        <input className='settingsInput' type="file" id="fileInput" style = {{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='User'/>
                    <label>Email</label>
                    <input type="email" placeholder='user@email.com'/>
                    <label>Passowrd</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
