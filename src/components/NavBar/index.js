import React from 'react'
import { Nav, Link } from './styles'
import { FaHome, FaHeart } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
export const NavBar = () => {
    return (
        <Nav>
            <Link to='/'>
                <FaHome size={22} />
            </Link>
            <Link to='/favs'>
                <FaHeart size={22} />
            </Link>
            <Link to='/user'>
                <MdAccountCircle size={24} />
            </Link>
        </Nav>
    )
}
