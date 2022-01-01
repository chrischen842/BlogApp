import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
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
