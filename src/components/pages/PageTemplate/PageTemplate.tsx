import React, { type FC } from 'react';
import styles from "./PageTemplate.module.scss";
import Particles from './bgAnimation/Particles';

interface IPageTemplateProps {
    children?: React.ReactNode,
}

const PageTemplate: FC<IPageTemplateProps> = ({ children }) => {
  return (
    <main className={styles.pageTemplate}>
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleCount={700}
          particleSpread={9}
          speed={0.32}
          particleColors={["#00ffff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={0.8}
          alphaParticles={false}
          particleBaseSize={60}
          sizeRandomness={1.3}
          cameraDistance={25}
          disableRotation
        />
      </div>
      
      { children }
    </main>
  )
}

export default PageTemplate;