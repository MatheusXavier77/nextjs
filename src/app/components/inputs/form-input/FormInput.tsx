import styles from "./forminput.module.css"

interface FormInputProps {
    type: string
    name: string
    placeholder?: string
    onChange?: () => void
}

export const FormInput = ({...props}: FormInputProps) => {
    return (
        <input
            className={styles.input}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}
