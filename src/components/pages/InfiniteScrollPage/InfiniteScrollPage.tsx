import { useVirtualizer } from '@tanstack/react-virtual';
import { useMemo, useCallback, useRef, type FC } from 'react';

import PageTemplate from '@/components/layout/PageTemplate/PageTemplate';

import styles from './InfiniteScrollPage.module.scss';
import VirtualListItem from './VirtualListItem/VirtualListItem';

const InfiniteScrollPage: FC = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const TOTAL_ITEMS = 1_000_000;

    const estimateSize = useCallback(() => 35, []);
    const getScrollElement = useCallback(() => scrollRef.current, []);
    const measureElement = useCallback((el: HTMLElement) => el.getBoundingClientRect().height, []);

    const virtualizer = useVirtualizer({
        count: TOTAL_ITEMS,
        estimateSize,
        getScrollElement,
        measureElement,
        overscan: 7,
    });

    const virtualItems = useMemo(() => virtualizer.getVirtualItems(), [virtualizer]);
    // const virtualItems = virtualizer.getVirtualItems();

    return (
        <PageTemplate className={styles.infiniteScrollPage}>
            <div className={styles.header}>
                <h1>InfiniteScrollPage</h1>
                <p className={styles.stats}>Total items: {TOTAL_ITEMS}</p>
            </div>

            <div ref={scrollRef} className={styles.scrollbarHolder}>
                <ul
                    className={styles.scrollbar}
                    role="list"
                    style={{
                        height: virtualizer.getTotalSize(),
                        position: 'relative',
                    }}
                >
                    {virtualItems.map(virtualItem => (
                        <VirtualListItem
                            key={virtualItem.key}
                            virtualItem={virtualItem}
                            measureFunc={virtualizer.measureElement}
                        >
                            #{virtualItem.index + 1}
                        </VirtualListItem>
                    ))}
                </ul>
            </div>
        </PageTemplate>
    );
};

export default InfiniteScrollPage;
