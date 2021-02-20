import { Link } from '@reach/router'
import React from 'react'
import NavItem from '../NavItem'

import { routes } from '../../router'

export interface INavProps {}

const Nav: React.FC<INavProps> = (props) => {
    return (
        <div className="flex flex-row px-4 bg-white border-b-2 border-gray-200">
            <NavItem>PJ</NavItem>
            <NavItem>
                <Link to={`${routes.HOME}`}>Home</Link>
            </NavItem>
            <NavItem>
                <Link to={`${routes.PDF}`}>PDF</Link>
            </NavItem>
        </div>
    )
}

export default Nav
