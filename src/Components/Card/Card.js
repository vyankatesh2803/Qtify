import './Card.css'

export default () => {
    return (
        <div className="card-wrapper">
           <div className="card-metadata">
                <img src="https://source.unsplash.com/featured" alt="Card Image" className="card-image"></img>
                <follower>100 Follows</follower>
            </div>
            <div className="card-category">New Bollywood</div>
        </div>
    )
}