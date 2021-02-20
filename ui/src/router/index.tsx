import { Router } from '@reach/router'
import React, { ReactElement } from 'react'

import FourOhOh from './FourOhOh'
import Home from './Home'

interface Props {}

const Routing: React.FC<Props> = ({}: Props): ReactElement => {
    return (
        <Router>
            <Home path="/" />
            <FourOhOh default />
        </Router>
    )
}

export default Routing
