import { NavLink } from "react-router-dom";

import './SideNavLink.scss';

interface SideNavLinkProps {
  icon: string;
  label: string;
  path: string;
}

export function SideNavLink({ icon, label, path }: SideNavLinkProps): JSX.Element {
  return (
    <li className="side-nav-item">
      <NavLink
        className="side-nav-link"
        to={path}>
        <i className={`ph ${icon} icon`}></i>
      </NavLink>
      <span className="link-label">{label}</span>
    </li>
  );
}