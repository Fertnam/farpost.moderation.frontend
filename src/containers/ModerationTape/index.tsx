import React, { useCallback, useMemo } from 'react'
import ModerationTapeList from './components/List'
import ModerationTapeManual from './components/Manual'
import styles from './styles.module.scss'
import useModerationTape from 'core/hooks/useModerationTape'
import { AdvertisementType } from 'core/types/Advertisement'

function ModerationTape() {
    const { items, activeItem, setActiveItem } =
        useModerationTape<AdvertisementType>()

    return (
        <div className={styles.moderationTape}>
            {activeItem?.id}

            <ModerationTapeList
                advertisements={items}
                onListItemClick={setActiveItem}
            />

            <ModerationTapeManual />
        </div>
    )
}

export default ModerationTape
