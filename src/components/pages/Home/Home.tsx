import type { FC } from "react";
import styles from './Home.module.scss';
import PageTemplate from "../PageTemplate/PageTemplate";

const Home: FC = () => {
    return (
        <PageTemplate>
            <div className={styles.homePage}>
                home <br />
                will be soon...
            </div>
        </PageTemplate>
    )
}

export default Home;