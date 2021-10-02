import React from "react";
import "./index.css";
const Logging = () => {
    return(
        <div className="logging">
            <h1>YouBase</h1 >
            <div className="body">
            <h1>Connect to people, not platforms</h1>
            <div>Person-mediate health data exchange is the future of Health IT and precision medicine YouBase was built to take us there</div>
            </div>
            <form>
            <label>
                <p className="p">Sign up for out beta list to learn more</p>
                <textarea className="textarea"></textarea><button className="button">Get Started</button>
            </label>
            </form>
        </div>
    )
}

export default Logging;