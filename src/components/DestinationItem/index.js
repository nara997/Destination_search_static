import "./index.css"

const DestinationItem = (props) => {
    const {DestinationItem} = props
    const {name, imgUrl} = DestinationItem
    return(
        <li className="destination-item">
            <img src={imgUrl} className="destination-image"/>
            <p className="destination-name">{name}</p>
        </li>
    )
}

export default DestinationItem