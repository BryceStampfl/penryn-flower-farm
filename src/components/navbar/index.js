import React from 'react'
import Logo from '../../images/Logo.png'

const Navbar = () => {

    const links = (
        Links.map((link) => {
            return <Link name={link} />
        })
    )

    return(
        <nav className='navbar'>
            <div className='logo font'>
            <p>
                Penryn Flower Farm
            </p>
            </div>
            <ul className='links '>
             {links}
            </ul>
        </nav>
    )
}
export default Navbar

const Links = ['Home', 'Flowers', 'About']

const Link = ({name}) => {

    return(
        <span className='link font'>
        <li><a>{name}</a></li>
        </span>
    )
}