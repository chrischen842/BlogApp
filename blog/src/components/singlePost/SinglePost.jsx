import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostContainer'>
                <img 
                    src="static/scenery.png" 
                    alt="" 
                    className="singlePostImage" 
                />
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor
                    <div className="singlePostEditContainer">
                        <i className='singlePostIcon far fa-edit'></i>
                        <i className='singlePostIcon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className="singlePostContents">
                    <span className='singlePostAuthor'>
                        Author: <b>Safak</b>
                    </span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDescription'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero necessitatibus? Quibusdam, facere ducimus? Doloremque dolores laborum delectus omnis veniam, tempore dignissimos dolor aliquid ea ipsum voluptatibus tenetur? Accusamus, voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque earum dolorem blanditiis, enim hic vitae delectus sapiente illum reiciendis provident ab, velit aut, magni accusamus in ex cupiditate totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit reprehenderit dignissimos culpa ad. Deserunt assumenda placeat veritatis velit deleniti fugit accusamus! Doloribus voluptatum, velit nesciunt quam natus laboriosam ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime sed vitae quo error voluptatem accusamus dolore voluptatum ex similique aliquam id quasi aliquid expedita, ducimus iste ad sunt repellat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta earum accusamus laborum quo necessitatibus. Dignissimos, consequuntur beatae obcaecati molestiae harum eaque porro. Officiis iusto porro impedit voluptatibus nihil nemo illum!
                </p>
            </div>
        </div>
    )
}
