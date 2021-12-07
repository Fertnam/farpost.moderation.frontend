import React, { FC } from 'react'
import Advertisement from 'components/Advertisement/Advertisement'
import styles from './ModerationTape.module.scss'

const ModerationTape: FC = () => {
    return (
        <div className={styles.moderationTape}>
            <Advertisement className={styles.item} />
            <Advertisement className={styles.item} />
            <Advertisement className={styles.item} />
        </div>
    )
}

export default ModerationTape
