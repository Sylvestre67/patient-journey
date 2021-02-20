import { Link } from '@reach/router'
import React from 'react'
import Home from '../Icons/Home'
import NavItem from '../NavItem'

export interface INavProps {}

const Nav: React.FC<INavProps> = (props) => {
    return (
        <div className="flex flex-row px-4 bg-white border-b-2 border-gray-200">
            <NavItem>PJ</NavItem>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
        </div>
    )
}

export default Nav
