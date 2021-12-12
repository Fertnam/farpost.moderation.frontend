import React from 'react'
import ModerationTapeItem from './components/Item'
import ModerationTapeManual from './components/Manual'
import styles from './styles.module.scss'
import useModerationTape from 'core/hooks/useModerationTape'

function ModerationTape() {
    const [advertisements, activeAdvertisement, setActiveAdvertisement] =
        useModerationTape()

    return (
        <div className={styles.moderationTape}>
            <div className={styles.items}>
                {advertisements.map((advertisement) => (
                    <ModerationTapeItem
                        advertisement={advertisement}
                        active={activeAdvertisement?.id === advertisement.id}
                        key={advertisement.id}
                        onClick={() => setActiveAdvertisement(advertisement)}
                    />
                ))}
            </div>

            <ModerationTapeManual />
        </div>
    )
}

export default ModerationTape
