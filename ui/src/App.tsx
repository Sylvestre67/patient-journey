import React from 'react'
import { Worker } from '@react-pdf-viewer/core'

import './App.css'
import Nav from './components/Nav'
import Routing from './router'

const App = () => {
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Nav />
                <div className="container mx-auto">
                    <Routing />
                </div>
            </Worker>
        </>
    )
}

export default App
