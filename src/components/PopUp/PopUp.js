import React from "react";
import "./PopUp.css";

const PopoUp = ({ releaseDate, closePopup }) => {

    return (
        <div className="modal">
            <span className="close" onClick={closePopup}>&times;</span>
            <strong>
                Movie release date: {releaseDate}
            </strong>
        </div>
    )
}

export default PopoUp;