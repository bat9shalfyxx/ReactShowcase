import type { FC, InputHTMLAttributes } from 'react';

import styles from './CustomInput.module.scss';

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const CustomInput: FC<ICustomInputProps> = ({ className, ...props }) => {
    return <input {...props} className={`${styles.input} ${className || ''}`} />;
};

export default CustomInput;
