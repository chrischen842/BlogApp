import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img 
                className='writeImage' 
                src="static/writeScenery.png" 
                alt="" 
            />
            <form className='form'>
                <div className="writeForm">
                    <label htmlFor="input">
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type="file" id="input" style = {{display: "none"}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeForm">
                    <textarea placeholder='Tell your story...' type = "text" className='writeInput writeText'></textarea>
                </div>
                <button className="submit">Publish</button>
            </form>
        </div>
    )
}
