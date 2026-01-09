import type { FC } from "react";
import styles from "./Header.module.scss";

import MyNavLink from "../MyNavLink/MyNavLink";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.homePageLink}>
                <MyNavLink to="/" title="Home" />
            </div>
            
            <div className={styles.otherLinks}>
                <MyNavLink to="/todo" title="Todo" />
            </div>
        </header>
    )
}

export default Header;