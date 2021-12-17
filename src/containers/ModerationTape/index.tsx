import React from 'react'
import ModerationTapeList from './components/List'
import ModerationTapeListItem from './components/ListItem'
import ModerationTapeManual from './components/Manual'
import styles from './styles.module.scss'
import useModerationTape from 'core/hooks/useModerationTape'
import { AdvertisementType } from 'core/types/Advertisement'

function ModerationTape() {
    const [advertisements, activeAdvertisement, setActiveAdvertisement] =
        useModerationTape<AdvertisementType>()

    return (
        <div className={styles.moderationTape}>
            {activeAdvertisement?.id}

            <ModerationTapeList
                items={advertisements}
                renderItem={(advertisement: AdvertisementType) => (
                    <ModerationTapeListItem
                        key={advertisement.id}
                        advertisement={advertisement}
                        onClick={() => setActiveAdvertisement(advertisement)}
                    />
                )}
            />

            <ModerationTapeManual />
        </div>
    )
}

export default ModerationTape
