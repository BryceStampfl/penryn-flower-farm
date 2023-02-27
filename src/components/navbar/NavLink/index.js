import React from 'react';
import { Link } from "react-router-dom";
import { Text } from '@aws-amplify/ui-react';

const NavLink = ({ name, path, active, onClick }) => {
    return (
        <Link
            // style={{ textDecoration: active ? 'underline' : 'none' }}
            style={{ textDecoration: 'none' }}

            onClick={(e) => onClick(name)}
            to={path}>
            <Text
                fontFamily='Fahkwang'
                fontSize={{ base: '1em', medium: '1.5em' }}
                color={active ? 'green' : 'black'}

            >
                {name}
            </Text>
        </Link >
    )
}
export default NavLink;