import React, { useContext } from 'react'
import Authcontext from '../context/Authcontext'

const Homepage = () => {
    const authcontext = useContext(Authcontext)
    return (
        <div>
            <h1>You are Logged in!</h1>
            <button onClick={() => authcontext.logoutHandler()}>Logout</button>
        </div>
    )
}

export default Homepage
