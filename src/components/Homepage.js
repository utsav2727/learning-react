import React from 'react'

const Homepage = (props) => {
    return (
        <div>
            <h1>You are Logged in!</h1>
            <button onClick={() => props.logoutHandler()}>Logout</button>
        </div>
    )
}

export default Homepage
