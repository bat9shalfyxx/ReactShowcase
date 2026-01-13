import React, { type FC } from 'react';
import styles from "./PageTemplate.module.scss";
import Particles from './bgAnimation/Particles';

interface IPageTemplateProps {
    children?: React.ReactNode,
}

const PageTemplate: FC<IPageTemplateProps> = ({ children }) => {
  return (
    <main className={styles.pageTemplate}>
      { children }
      
      <Particles
        particleCount={700}
        particleSpread={9}
        speed={0.32}
        particleColors={["#00ffff"]}
        moveParticlesOnHover={false}
        particleHoverFactor={0.5}
        alphaParticles={false}
        particleBaseSize={35}
        sizeRandomness={0.6}
        cameraDistance={25}
        disableRotation
      />
    </main>
  )
}

export default PageTemplate;