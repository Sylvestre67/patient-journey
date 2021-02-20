import React, { ReactElement } from 'react'

interface Props {}

const NavItem: React.FC<Props> = ({ children }): ReactElement => {
    return <div className="py-2 px-2">{children}</div>
}

export default NavItem
