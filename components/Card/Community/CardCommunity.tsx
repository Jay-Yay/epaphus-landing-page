import { StaticImageData } from "next/image";
import styles from "./CardCommunity.module.scss"

export interface ICardCommnunity {
    label: string;
    title: string;
    description: string[];
    imgURL: StaticImageData;
}

const CardCommunity = (props: ICardCommnunity) => {
    return (
        <>
            <div className={styles.cardCommunity}>
                <div className={styles.imageWrapper}>
                    <img 
                        src={props.imgURL.src}
                        alt={props.label}
                        className={styles.image}
                    />
                </div>
                <div className={styles.descriptionWrapper}>
                    <div className={styles.title}>{props.title}</div>
                    <ul className={styles.descriptionList}>
                        {props.description.map((text: string, index: number)=> (
                            <li key={index} className={styles.description}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CardCommunity;

