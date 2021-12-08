import React from 'react'
import Advertisement from 'components/Advertisement'
import styles from './styles.module.scss'

function ModerationTape() {
    return (
        <div className={styles.moderationTape}>
            <Advertisement className={styles.item} />
            <Advertisement className={styles.item} />
            <Advertisement className={styles.item} />
        </div>
    )
}

export default ModerationTape
