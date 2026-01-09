import type { FC } from "react";
import styles from "./Headet.module.scss";

import MyNavLink from "../MyNavLink/MyNavLink";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <MyNavLink to="/" title="Home" />
            <MyNavLink to="/todo" title="Todo" />
        </header>
    )
}

export default Header;