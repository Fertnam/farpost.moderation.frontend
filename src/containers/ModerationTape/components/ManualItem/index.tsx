import React from 'react'
import classNames from 'classnames'
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
            className={classNames([
                styles.moderationTapeManualItem,
                props.color ? styles[props.color] : null,
            ])}
        >
            <span className={styles.action}>{props.action}</span>
            <span className={styles.hotKey}>{props.hotKey}</span>
        </div>
    )
}

export default ModerationTapeManualItem
