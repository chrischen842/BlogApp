import './mainPost.css'

export default function MainPost() {
    return (
        <div className='mainPost'>
            <img className='mainPostImage' 
            src="static/scenery.png" 
            alt="" 
        />  
            <div className="mainPostInfo">
                <div className="mainPostCategories">
                    <span className="mainPostCat">Music</span>
                    <span className="mainPostCat">Life</span>
                </div>
                <span className="mainPostTitle">
                    Lorem ipsum dolor
                </span>
                <hr/>
                <span className="mainPostDate">1 hour ago</span>
            </div>
            <p className='mainPostDescription'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, velit autem eveniet non quo ratione fugiat, amet quaerat consequatur ex tempora incidunt ullam repudiandae! Praesentium, ab! Nostrum provident ab velit?
            </p>
        </div>
    );
}
