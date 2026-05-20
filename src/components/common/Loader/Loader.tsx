import { type FC } from 'react';

import PageTemplate from '@/components/layout/PageTemplate/PageTemplate';

import styles from './Loader..module.scss';

interface LoaderProps {
    size?: 'small' | 'medium' | 'large';
    text?: string;
    inline?: boolean;
}

const Loader: FC<LoaderProps> = ({ size = 'medium', text = 'Loading...', inline = false }) => {
    const loaderContent = (
        <PageTemplate>
            <div className={`${styles.loader} ${styles[size]}`}>
                <div className={styles.spinner}>
                    <div className={styles.bounce1}></div>
                    <div className={styles.bounce2}></div>
                    <div className={styles.bounce3}></div>
                </div>
                {text && <p className={styles.text}>{text}</p>}
            </div>
        </PageTemplate>
    );

    if (inline) {
        return <div className={styles.inline}>{loaderContent}</div>;
    }

    return loaderContent;
};

export default Loader;
