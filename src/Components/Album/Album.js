import './Album.css'
import Card from '../Card/Card'
import { useState } from 'react'
import Carousel from '../Carousel/Carousel'

export default ({title, data}) => {

    const [isCollapsed, setIsCollapsed] = useState (false)

    return (
        <>
            <div className="album-container">
                <div className = "album-flex">
                    <p>{title}</p>
                    <button onClick={() => {
                        setIsCollapsed(!isCollapsed)
                    }} >{isCollapsed ? 'Show All' : 'Collapse'}</button>
                </div>
                {isCollapsed ? <Carousel data={data}/> :
                <div className="card-container">
                    {data.map(cardData => <Card
                    key={cardData.id}
                    imgSrc={cardData.image}
                    label={cardData.title}
                    followersCount={cardData.follows}
                    />
                    )}
                </div>}
            </div>
            <hr className="album-hr" />
        </>
    )
}