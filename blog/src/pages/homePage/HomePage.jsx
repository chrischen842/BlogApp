import Header from '../../header/Header'
import Post from '../../post/Post'
import Sidebar from '../../sidebar/Sidebar'
import './homePage.css'

export default function HomePage() {
    return (
        <>
            <Header/>
            <div className='homePage'>
                <Post/>
                <Sidebar/>
            </div>
        </>
    )
}
