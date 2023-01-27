import React from 'react';
import { Link } from "react-router-dom";


const NavLink = ({ name, path, active, onClick }) => {
    return (
        <li>
            <a>
                <Link
                    onClick={(e) => onClick(name)}
                    className={[active ? 'link-active link font ' : ' link font ']}
                    to={path}>
                    {name}
                </Link>
            </a>
        </li>
    )
}
export default NavLink;