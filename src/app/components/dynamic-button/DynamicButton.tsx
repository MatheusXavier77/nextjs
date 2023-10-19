import styles from "./dynamicbutton.module.css"
import React from "react";

interface ButtonProps {
    className?: string;
    icon?: any;
    title?: string
    onClick?: () => void;
}
export const DynamicButton = ({...props}: ButtonProps) => {
    return (
        <button
            className={`${styles.dymaic_button} ${props.className}`}
            onClick={props.onClick}
        >
            {props.title}
            {props.icon && (
                React.createElement(props.icon, { className: styles.icon })
            )}
        </button>
    )
};