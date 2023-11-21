import './Card.css'

export default ({
    imgSrc,
    followersCount,
    label
}) => {
    return (
        <div className="card-wrapper">
           <div className="card-metadata">
                <img src={imgSrc} alt="Card Image" className="card-image"></img>
                <follower>{followersCount} Follows</follower>
            </div>
            <div className="card-category">{label}</div>
        </div>
    )
}