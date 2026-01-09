import type { FC } from "react";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="https://github.com/bat9shalfyxx" target="blank">
                    <FaGithub className={`${styles.iconGithub} ${styles.icon}`}/>
                </a>
                <a href="https://web.telegram.org/a/#6057341851" target="blank">
                    <FaTelegramPlane className={`${styles.iconGithub} ${styles.icon}`}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;