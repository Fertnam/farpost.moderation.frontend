import React from 'react'
import List from 'components/List'
import Advertisement from 'components/Advertisement'
import useList from 'core/hooks/useList'
import { AdvertisementType } from 'core/types/Advertisement'

function ModerationTapeList() {
    const [ads, activeAd, setActiveAd] = useList<AdvertisementType>()

    return (
        <List
            items={ads}
            activeItem={activeAd}
            renderItem={(ad) => <Advertisement advertisement={ad} />}
            onListItemClick={(ad) => setActiveAd(ad)}
        />
    )
}

export default ModerationTapeList
