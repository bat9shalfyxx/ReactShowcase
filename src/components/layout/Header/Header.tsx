import type { FC } from 'react';

import MyNavLink from '@/components/common/CustomNavLink/CustomNavLink';

import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.homePageLink}>
                <MyNavLink to="/" title="Home" />
            </div>

            <div className={styles.otherLinks}>
                <MyNavLink to="/todo" title="Todo" />
                <MyNavLink to="/infinite-scroll" title="InfiniteScroll" />
            </div>
        </header>
    );
};

export default Header;
