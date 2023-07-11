const LocationInfo = ({location}) => {

    console.log(location)

    return (
        <article>
            <h2 className="location-text">{location?.name}</h2>
            <ul className="info-container">
        <li className="line__container1"><span>Type:</span><span>{location?.type}</span></li>
        <li className="line__container2"><span>Dimension:</span><span> {location?.dimension} </span></li>
        <li className="line__container3"><span>Population:</span><span> {location?.residents.length} </span></li>
         </ul>
        </article>
    )
}

export default LocationInfo