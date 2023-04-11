import { useState } from "react"
import DestinationItem from "../DestinationItem"
import "./index.css"



const DestinationSearch = (props) => {
    const {destinationsList} = props
    const [searchInput, setSearchInput] = useState("")
    const [destinationsLists, setDestinationLists] = useState(destinationsList)
    

    const  onChangeSearchInput =(e) => {
        setSearchInput(e.target.value)
    }

    const filteredDestinationList = destinationsLists.filter(eachDestination =>
        eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
    )

    return(
        <div className="bg-container">
            <div className="destination-container-bg">
                <h1 className="heading">Destination Search</h1>
                <div className="search-input-container">
                    <input type="text" placeholder="Search" className="input-element" onChange={onChangeSearchInput} value={searchInput}/>
                    <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className="search-icon"/>
                </div>
                <ul className="destination-list-container">
                    {filteredDestinationList.map(eachItem =>
                        <DestinationItem key={eachItem.id} DestinationItem={eachItem}/>
                        )}
                </ul>

            </div>

        </div>
    )

}

export default DestinationSearch