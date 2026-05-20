import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './CustomNavLink.module.scss';

interface ICustomNavLink {
    to: string;
    title: string;
    icon?: ReactNode;
}

const CustomNavLink: FC<ICustomNavLink> = ({ to, title, icon }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
        >
            <span className={styles.icon}>{icon}</span>

            <span className={styles.title}>{title}</span>
        </NavLink>
    );
};

export default CustomNavLink;
