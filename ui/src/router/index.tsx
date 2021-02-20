import { Router } from '@reach/router'
import React, { ReactElement } from 'react'

import FourOhOh from './FourOhOh'
import Home from './Home'
import PDF from './PDF'

interface Props {}

export const routes = {
    HOME: '/',
    PDF: '/view_pdf/',
}

const Routing: React.FC<Props> = ({}: Props): ReactElement => {
    return (
        <Router>
            <Home path="/" />
            <PDF path="/view_pdf/" />
            <FourOhOh default />
        </Router>
    )
}

export default Routing
