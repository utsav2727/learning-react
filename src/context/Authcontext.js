import React from 'react'

const Authcontext = React.createContext({
    loggedIn: false,
    logoutHandler: () => { }
})

export default Authcontext
