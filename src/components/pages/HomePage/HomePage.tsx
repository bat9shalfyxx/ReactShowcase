import type { FC } from "react";
import styles from './HomePage.module.scss';
import PageTemplate from "../PageTemplate/PageTemplate";

const HomePage: FC = () => {
    return (
        <PageTemplate>
            <div className={styles.homePage}>
                home <br />
                will be soon...
            </div>
        </PageTemplate>
    )
}

export default HomePage;