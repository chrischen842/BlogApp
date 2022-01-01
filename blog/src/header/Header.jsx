import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="titles">
                <span className='titleSmall'>React & Node</span>
                <span className='titleLarge'>Blog</span>
            </div>
            <img className='titleImage' src="static/flowerfield.png" alt="" />
        </div>
    )
}
