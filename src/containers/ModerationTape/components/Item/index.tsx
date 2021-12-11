import React from 'react'
import Advertisement from '../../../../components/Advertisement'
import styles from './styles.module.scss'
import { AdvertisementType } from '../../../../core/types/Advertisement'

type Props = {
    advertisement: AdvertisementType
    active: boolean
    onClick: () => void
}

function ModerationTapeItem(props: Props) {
    return (
        <div
            className={
                props.active
                    ? [styles.moderationTapeItem, styles.active].join(' ')
                    : styles.moderationTapeItem
            }
            onClick={props.onClick}
        >
            <Advertisement advertisement={props.advertisement} />
        </div>
    )
}

export default ModerationTapeItem
