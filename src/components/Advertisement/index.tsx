import React from 'react'
import styles from './styles.module.scss'
import { AdvertisementType } from '../../core/types/Advertisement'

type Props = {
    advertisement: AdvertisementType
}

function Advertisement({ advertisement }: Props) {
    return (
        <div className={styles.advertisement}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <span className={styles.id}>{advertisement.id}</span>
                    <span className={styles.separator}>—</span>
                    <span className={styles.date}>
                        {advertisement.publishDateString}
                    </span>
                </div>

                <div className={styles.user}>{advertisement.ownerLogin}</div>
            </div>

            <div className={styles.content}>
                <div className={styles.title}>
                    {advertisement.bulletinSubject}
                </div>

                <div className={styles.info}>
                    <div className={styles.text}>
                        {advertisement.bulletinText}
                    </div>

                    {advertisement.bulletinImagees.length > 0 && (
                        <div className={styles.images}>
                            {advertisement.bulletinImagees.map((image) => (
                                <img
                                    src={image}
                                    alt="Объявление"
                                    className={styles.item}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Advertisement
