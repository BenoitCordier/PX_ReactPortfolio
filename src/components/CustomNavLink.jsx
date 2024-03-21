import { NavLink } from "react-router-dom";

export function CustomNavLink ({ to, activeIcon, inActiveIcon, text }) {
    return (
    <NavLink to={to}>
        {({ isActive }) => isActive ? ( <> {activeIcon} {text} </> ) : ( <> {inActiveIcon} {text} </> )}
    </NavLink>
    );
};