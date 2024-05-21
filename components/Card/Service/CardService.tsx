import { StaticImageData } from "next/image";
import styles from "./CardService.module.scss"

export interface ICardService {
    label: string;
    title: string;
    description: string[];
    imgData: StaticImageData;
}

const CardService = (props: ICardService) => {
    return (
        <>
            <div className={styles.cardService}>
                <div className={styles.imageWrapper}>
                    <img 
                        src={props.imgData.src}
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

export default CardService;

