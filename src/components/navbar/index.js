import React from 'react'
import NavLink from './NavLink';
import { Squash } from 'hamburger-react'
import { View, Flex, Button } from '@aws-amplify/ui-react';

const Navbar = () => {
    const [navLinks, setNavLinks] = React.useState(linkData)
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const linkClicked = (linkName) => {
        let newLinks = [...navLinks];
        newLinks.map((link) => {
            if (link.name === linkName) { link.active = true }
            else { link.active = false }
        })
        setNavbarOpen(!navbarOpen)
        return setNavLinks(newLinks)
    }

    const links = (
        navLinks.map((link) => {
            return <NavLink
                active={link.active}
                name={link.name}
                path={link.path}
                linkClicked={linkClicked}
            />
        })
    )

    return (
        <View backgroundColor='#F7F7F7'
            paddingBottom='0.5rem'
            textAlign='center'
        >
            <View
                display={{ base: 'inline-block', medium: 'block' }}
                margin='0 auto 0 auto'
            >
                <Button
                    display={{ base: 'block', medium: 'none' }}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    padding='0px'
                >
                    <Squash
                        toggled={navbarOpen}
                        label="Show menu"
                        size={16}
                    />
                </Button>
            </View>

            <View
                display={{ base: navbarOpen ? 'block' : 'none', medium: 'block' }}
                maxWidth={{ medium: '1280px' }}
                margin='0 auto 0 auto'
            >
                <Flex
                    padding={{ base: '0px', medium: '0 2rem 0 2rem' }}
                    direction={{ base: 'column', medium: 'row' }}
                    justifyContent='space-evenly'
                    alignContent='center'
                >
                    {links}
                </Flex >
            </View>


        </View>
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

}, {
    path: '/Purchase',
    name: 'Cart',
    active: false,

},

];