import { type FC } from 'react';
import { Link } from 'react-router';

import PageTemplate from '@/components/layout/PageTemplate/PageTemplate';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
    return (
        <PageTemplate className={styles.notFoundPage}>
            <div className={styles.container}>
                <div className={styles.glitchBackground} />

                <div className={styles.content}>
                    <div className={styles.errorCode}>
                        <span className={styles.digit}>4</span>
                        <span className={styles.digit}>0</span>
                        <span className={styles.digit}>4</span>
                    </div>

                    <h1 className={styles.title}>Page Not Found</h1>

                    <p className={styles.description}>
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className={styles.reasons}>
                        <p>The page might've been:</p>
                        <ul>
                            <li>🔗 Removed or deleted</li>
                            <li>🔗 Moved to a new location</li>
                            <li>🔗 Temporarily unavailable</li>
                            <li>🔗 Typo in the URL address</li>
                            <li>🔗 Never existed</li>
                        </ul>
                    </div>

                    <div className={styles.actions}>
                        <Link to="/" className={styles.primaryButton}>
                            Go to Homepage
                        </Link>
                        <button onClick={() => window.history.back()} className={styles.secondaryButton}>
                            ⬅️ Go Back
                        </button>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default NotFoundPage;
