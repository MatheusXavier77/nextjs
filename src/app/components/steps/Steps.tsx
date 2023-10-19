import styles from "./steps.module.css"

interface StepsProps {
    step: number
}

export const Steps = ({...props}: StepsProps) => {

    return (
        <div className={styles.container}>
            <p
                className={styles.isDone}
            >1</p>
                <span className={styles.isDoneTiny}/>
                <span className={styles.isDoneTiny}/>
                <span className={styles.isDoneTiny}/>
            <p
                className={ props.step !== 1 ?`${styles.isDone}` : `${styles.isEmpty}`}
            >2</p>
                <span className={props.step !== 1 ? styles.isDoneTiny : styles.emptyTiny}/>
                <span className={props.step !== 1 ? `${styles.isDoneTiny}` : `${styles.emptyTiny}`}/>
                <span className={props.step !== 1 ? `${styles.isDoneTiny}` : `${styles.emptyTiny}`}/>
            <p className={props.step == 3 ?`${styles.isDone}` : `${styles.isEmpty}`}
            >3</p>
        </div>
    )
}