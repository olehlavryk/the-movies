import React, { useState } from "react";
import "./RateSwitch.css";
const RateSwitch = ({ popularity }) => {
    const [showRate, setShowRate] = useState(false);

    if (!showRate) {
        return (
            <span className="rate-swicher"
                onClick={() => setShowRate(!showRate)}
            >
                Show Rate
            </span>
        )
    }

    return (
        <div className="rate-wrapper">
            <span className="rate">
                Rate: {popularity}
            </span>
            <span className="rate-swicher"
                onClick={() => setShowRate(false)}
            >
                Hide Rate
            </span>
        </div>
    )
}

export default RateSwitch;