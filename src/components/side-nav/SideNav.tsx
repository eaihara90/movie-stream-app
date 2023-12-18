import { } from 'react';

import './SideNav.scss';
import { SideNavLink } from './side-nav-link/SideNavLink';

export function SideNav(): JSX.Element {
  const links: { icon: string, label: string, path: string }[] = [
    { icon: 'ph-film-reel', label: 'Home', path: '/' },
    { icon: 'ph-identification-card', label: 'Admin', path: '/admin' }
  ];

  return (
    <div className="side-nav">
      <ul className="side-nav-list">
        { links.map((x, index) => <SideNavLink key={index} icon={x.icon} label={x.label} path={x.path} />)}
      </ul>
    </div>
  );
}