import React from "react";

const Logging = () => {
    return(
        <div className="logging">
            <h1>YouBase</h1 >
            <div className="body">
            <h1>Connect to people,</h1>
            <h1>not platforms</h1>
            <div>Person-mediate health data exchange is the</div>
            <div>future of Health IT and precision medicine</div>
            <div>YouBase was built to take us there</div>
            </div>
            <form>
            <label>
                <p>Sign up for out beta list to learn more</p>
                <imput type="text" name="email" />
            </label>
            <div>
                <button>Get Started</button>
            </div>
            </form>
        </div>
    )
}

export default Logging;