import React from 'react'
import Advertisement from 'components/Advertisement'
import styles from './styles.module.scss'
import { AdvertisementType } from 'core/types/Advertisement'

type Props = {
    advertisement: AdvertisementType
    onClick: () => void
}

function ModerationTapeListItem(props: Props) {
    return (
        <div className={styles.listItem} onClick={props.onClick}>
            <Advertisement advertisement={props.advertisement} />
        </div>
    )
}

export default ModerationTapeListItem
