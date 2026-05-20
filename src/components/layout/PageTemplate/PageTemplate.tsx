import { memo, type FC, type PropsWithChildren } from 'react';

import Particles from './bgAnimation/Particles';
import styles from './PageTemplate.module.scss';

interface IPageTemplateProps extends PropsWithChildren {
    className?: string;
}

const PageTemplate: FC<IPageTemplateProps> = ({ children, className }) => {
    return (
        <main className={`${styles.pageTemplate} ${className || ''}`}>
            {children}

            <Particles
                particleCount={700}
                particleSpread={9}
                speed={0.32}
                particleColors={['#00ffff']}
                moveParticlesOnHover={false}
                particleHoverFactor={0.1}
                alphaParticles={false}
                particleBaseSize={35}
                sizeRandomness={0.3}
                cameraDistance={25}
                disableRotation
            />
        </main>
    );
};

export default memo(PageTemplate);
