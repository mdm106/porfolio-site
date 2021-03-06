import React from "react";

import { Link } from "react-router-dom";

const NavItem = ({ classID, content, link }) => (
        <Link to={link} replace>
            <h6 className={"menu-heading " + classID}>{content}</h6>
        </Link>
);

export default NavItem;