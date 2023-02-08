import { useState } from 'react'
import {Dialog} from "@reach/dialog"
import "@reach/dialog/styles.css";
import "./index.css"


const ModelDialog = props => {
    const {eachMessage} = props 
    const [dialog, setOnDialog] = useState(false)

    const eventHandler = () => {
        setOnDialog(prevState => !prevState)
    }

    return (
        <div className="MessageContainer">
         <div>
        <p>id : {eachMessage.id}</p>
        <p>sub : {eachMessage.subject}</p>
        <h1>body  : {eachMessage.body}</h1>
        <div className='button-Container'>
        <button className="stylingButton" type = "button" onClick = {eventHandler}>View More</button>
        </div>
        </div>
        <Dialog isOpen = {dialog} onDismiss = {!dialog}>
            <div className="model-card">
            <p> <span>ID:</span> : {eachMessage.id}</p>
            <p>  <span>Subject:</span> {eachMessage.subject}</p>
            <h1><span>Body:</span>{eachMessage.body}</h1>
            <div className='Dialog-btn-Container'>
            <button className="stylingButton" onClick={eventHandler}>Close</button>
            </div>
            </div>
        </Dialog>
        </div>
    )
}

export default ModelDialog