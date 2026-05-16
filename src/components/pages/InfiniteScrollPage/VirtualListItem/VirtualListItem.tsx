import { type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';
import { type FC, type ReactNode, memo } from 'react';

import styles from './VirtualListItem.module.scss';

interface IVirtualItem {
    virtualItem: VirtualItem;
    measureFunc: Virtualizer<HTMLDivElement, HTMLElement>['measureElement'];
    children: ReactNode;
}

const VirtualListItem: FC<IVirtualItem> = ({ virtualItem, measureFunc, children }) => {
    return (
        <li
            className={styles.listEl}
            role="listitem"
            ref={measureFunc}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
            }}
        >
            {children}
        </li>
    );
};

export default memo(VirtualListItem);
