
import { type FC } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
    const skills = ['React', 'TypeScript', 'Node.js', 'Zustand', 'Jest', 'Tailwind', 'Vite'];
    
    return (
        <PageTemplate>
            <div className={styles.homePage}>
                <div className={styles.main_info}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/bat9shalfyxx.png"
                        alt="Goddo / bat9shalfyxx avatar"
                        loading="lazy"
                    />
                    <h1>Goddo / bat9shalfyxx</h1>
                    
                    <div className={styles.socialLinks}>
                        <a 
                            href="https://github.com/bat9shalfyxx" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://chapayevsk.hh.ru/resume/3a308a9aff0ec34f780039ed1f486d59754e4d" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            hh.ru
                        </a>
                    </div>
                </div>

                <div className={styles.about}>
                    <h1>React Showcase</h1>
                    <p>
                        Добро пожаловать в мое портфолио! Здесь я демонстрирую свои навыки 
                        разработки на React и TypeScript. Каждый проект в этом портфолио 
                        показывает различные аспекты моей работы: от создания компонентов 
                        до управления состоянием и оптимизации производительности.
                    </p>
                    
                    <h2 style={{ color: '#646cff', fontSize: '1.5rem' }}>Стек:</h2>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <span key={index} className={styles.skillTag}>
                                {skill}
                            </span>
                        ))}
                    </div>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        marginTop: '2rem',
                        justifyContent: 'center'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: '#646cff', fontSize: '2rem' }}>10+</h3>
                            <p>Проектов</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: '#646cff', fontSize: '2rem' }}>3+</h3>
                            <p>Года опыта</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: '#646cff', fontSize: '2rem' }}>∞</h3>
                            <p>Энтузиазма</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default HomePage;