import React from 'react'
import NavLink from './NavLink';


const Navbar = () => {
    const [navLinks, setNavLinks] = React.useState(linkData)

    const linkClicked = (linkName) => {
        let newLinks = [...navLinks];
        newLinks.map((link) => {
            if (link.name === linkName) { link.active = true }
            else { link.active = false }
        })
        return setNavLinks(newLinks)
    }


    const links = (
        navLinks.map((link) => {
            return <NavLink
                active={link.active}
                name={link.name}
                path={link.path}
                onClick={linkClicked}
            />
        })
    )

    return (
        <nav className='navbar white '>
            <ul className='links'>
                {links}
            </ul>
        </nav>
    )
}
export default Navbar

const linkData = [{
    path: '/',
    name: 'Home',
    active: true,
},
{
    path: '/Flowers',
    name: 'Flowers',
    active: false,

},
{
    path: '/Subscription',
    name: 'Subscription',
    active: false,

},
{
    path: '/GiftCards',
    name: 'Gift Cards',
    active: false,

},
{
    path: '/About',
    name: 'About',
    active: false,

},
{
    path: '/Gallery',
    name: 'Gallery',
    active: false,

}];