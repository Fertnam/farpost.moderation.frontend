import React, { FC } from 'react'
import styles from './Advertisement.module.scss'

const Advertisement: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={[styles.advertisement, props.className].join(' ')}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <span className={styles.id}>34234234</span>
                    <span className={styles.separator}>—</span>
                    <span className={styles.date}>08:46, сегодня</span>
                </div>

                <div className={styles.user}>otdelkadrov1</div>
            </div>

            <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                cupiditate dolor dolorum magni porro suscipit vel! Cumque iure
                rem voluptatem.
            </div>
        </div>
    )
}

export default Advertisement
