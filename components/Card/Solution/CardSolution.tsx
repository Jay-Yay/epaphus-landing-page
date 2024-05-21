import styles from "./CardSolution.module.scss";

export interface ICardSolution {
    title: string;
    description: string;
}

const CardSolution = (props: ICardSolution) => {
    return (
        <>
            <div className={styles.cardSolution}>             
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
            </div>
        </>
    )
}

export default CardSolution;

