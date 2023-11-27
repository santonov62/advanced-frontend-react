import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void,
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const setFocus = () => {
        inputRef.current?.focus();
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) setFocus();
    }, [autofocus]);

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classNames(cls.placeholder)}>
                    {`${placeholder}`}
                </div>
            )}
            <input
                {...otherProps}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input)}
                ref={inputRef}
            />
        </div>
    );
});
