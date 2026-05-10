import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, type FC } from 'react';

import PageTemplate from '@/components/layout/PageTemplate/PageTemplate';

import styles from './InfiniteScrollPage.module.scss';

const InfiniteScrollPage: FC = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const virtualizer = useVirtualizer({
        count: 100_000,
        estimateSize: () => 25,
        getScrollElement: () => scrollRef.current,
    });

    return (
        <PageTemplate>
            <h2>InfiniteScrollPage</h2>

            <div ref={scrollRef} className={styles.scrollbarHolder}>
                <div
                    className={styles.scrollbar}
                    style={{
                        height: virtualizer.getTotalSize(),
                        position: 'relative',
                    }}
                >
                    {virtualizer.getVirtualItems().map((virtualItem, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: `${virtualItem.size}x`,
                                transform: `translateY(${virtualItem.start}px)`,
                            }}
                        >
                            {index}
                        </div>
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
};

export default InfiniteScrollPage;
