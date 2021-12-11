import React from 'react'
import styles from './styles.module.scss'

export enum Colors {
    BLUE = 'blue',
    GREEN = 'green',
    ORANGE = 'orange',
}

type Props = {
    action: React.ReactNode
    hotKey: React.ReactNode
    color?: Colors
}

function ModerationTapeManualItem(props: Props) {
    return (
        <div
            className={
                props.color
                    ? [styles.manualItem, styles[props.color]].join(' ')
                    : styles.manualItem
            }
        >
            <span className={styles.action}>{props.action}</span>
            <span className={styles.hotKey}>{props.hotKey}</span>
        </div>
    )
}

export default ModerationTapeManualItem
