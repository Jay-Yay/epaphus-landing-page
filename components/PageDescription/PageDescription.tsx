import { StaticImageData } from "next/image";
import styles from "./PageDescription.module.scss"

export interface PageDescriptionProps {
    label: string;
    title: string;
    description: string;
    imgData: StaticImageData;
}

const PageDescription = (props: PageDescriptionProps) => {
    return (
        <>
            <div className={styles.pageDescriptionWrapper}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.descriptionWrapper}>
                    <img
                        src={props.imgData.src}
                        alt={props.label}
                        className={styles.image}
                    />
                    <div className={styles.description}>{props.description}</div>
                </div>
            </div>
           
        </>
    )
}

export default PageDescription;

