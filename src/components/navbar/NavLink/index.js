import React from 'react';
import { Link } from "react-router-dom";
import { Text } from '@aws-amplify/ui-react';

const NavLink = ({ name, path, active, linkClicked }) => {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            onClick={(e) => linkClicked(name)}
            to={path}>
            <Text
                fontFamily='Cormorant'
                fontSize={{ base: '1rem', small: '1.25rem' }}
                color={active ? 'green' : 'black'}
            >
                {name}
            </Text>
        </Link >
    )
}
export default NavLink;