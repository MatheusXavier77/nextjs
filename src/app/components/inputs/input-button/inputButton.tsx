import styles from "./inputbutton.module.css";

interface InputButton {
    value: any;
    onClickAdd: () => void;
    onClickRemove: () => void;
}

export const InputButton = ({...props}: InputButton) => {

    return (
        <div className={styles.button_line}>
            <button onClick={props.onClickRemove}> - </button>
            <input
                type="text"
                value={props.value}
                className={styles.input_invisible}
                disabled
            />
            <button onClick={props.onClickAdd}> + </button>
        </div>
    );
};
