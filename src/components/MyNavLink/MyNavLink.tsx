import type { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './MyNavLink.module.scss';

interface IMyNavLink {
    to: string,
    title: string,
    icon?: React.ReactNode
}

const MyNavLink: FC<IMyNavLink> = ( { to, title, icon } ) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            } 
        >
            <span className={styles.icon}>
                {icon}
            </span>

            <span className={styles.title}>
                {title}
            </span>
        </NavLink>
    )
}

export default MyNavLink;