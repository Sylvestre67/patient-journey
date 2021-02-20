import React, { ReactElement } from 'react'

interface Props {
    default: boolean
}

const FourOhOh: React.FC<Props> = (props): ReactElement => {
    return (
        <div>
            <p>Page not found</p>
        </div>
    )
}

export default FourOhOh
