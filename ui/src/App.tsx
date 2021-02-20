import React from 'react'

import './App.css'
import Nav from './components/Nav'
import Routing from './router'

const App = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto">
                <Routing />
            </div>
        </>
    )
}

export default App
