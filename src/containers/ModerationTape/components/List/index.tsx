import React from 'react'
import ModerationTapeListItem from '../ListItem'
import { AdvertisementType } from 'core/types/Advertisement'

type Props = {
    advertisements: AdvertisementType[]
    onListItemClick: (advertisement: AdvertisementType) => void
}

function ModerationTapeList({ advertisements, onListItemClick }: Props) {
    return (
        <div>
            {advertisements.map((advertisement) => (
                <ModerationTapeListItem
                    advertisement={advertisement}
                    onClick={() => onListItemClick(advertisement)}
                    key={advertisement.id}
                />
            ))}
        </div>
    )
}

export default ModerationTapeList
