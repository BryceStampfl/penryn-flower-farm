import React from 'react'
import NavLink from './NavLink';
import { View, Flex, Text, Collection } from '@aws-amplify/ui-react';

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
        <View backgroundColor='#ededed'
            paddingBottom='0.5rem'
        >
            <Flex
                maxWidth={{ medium: '980px' }}
                padding={{ base: '0px', medium: '0 2rem 0 2rem' }}
                margin='0 auto 0 auto'
                direction={{ base: 'column', small: 'row' }}
                justifyContent='space-evenly'
                alignContent='center'
            >
                {links}
            </Flex >

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

}];