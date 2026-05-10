import React, { type FC } from 'react';

import Particles from './bgAnimation/Particles';
import styles from './PageTemplate.module.scss';

interface IPageTemplateProps {
    children?: React.ReactNode;
}

const PageTemplate: FC<IPageTemplateProps> = ({ children }) => {
    return (
        <main className={styles.pageTemplate}>
            {children}

            <Particles
                particleCount={700}
                particleSpread={9}
                speed={0.32}
                particleColors={['#00ffff']}
                moveParticlesOnHover={false}
                particleHoverFactor={0.1}
                alphaParticles={false}
                particleBaseSize={27}
                sizeRandomness={0.3}
                cameraDistance={30}
                disableRotation
            />
        </main>
    );
};

export default PageTemplate;
