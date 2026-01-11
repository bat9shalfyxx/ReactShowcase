import React, { type FC } from 'react';
import styles from "./PageTemplate.module.scss";

interface IPageTemplateProps {
    children?: React.ReactNode,
}

const PageTemplate: FC<IPageTemplateProps> = ({ children }) => {
  return (
    <main className={styles.pageTemplate}>
        { children }
    </main>
  )
}

export default PageTemplate;