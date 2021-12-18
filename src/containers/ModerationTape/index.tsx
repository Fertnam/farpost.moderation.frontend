import React from 'react'
import List from 'components/List'
import Advertisement from 'components/Advertisement'
import ModerationTapeManual from './components/Manual'
import useModerationTape from 'core/hooks/useModerationTape'
import { AdvertisementType } from 'core/types/Advertisement'
import styles from './styles.module.scss'

function ModerationTape() {
    const [advertisements, activeAdvertisement, setActiveAdvertisement] =
        useModerationTape<AdvertisementType>((setItems) =>
            setItems([
                {
                    id: 1234567,
                    publishDate: 1234567,
                    publishDateString: '08:46, сегодня',
                    ownerId: 1234567,
                    ownerLogin: 'Fertnam',
                    bulletinSubject: 'UI/UX Designer (Владивосток)',
                    bulletinText: 'Текст объявления ...',
                    bulletinImagees: [],
                },
                {
                    id: 324234,
                    publishDate: 2342343,
                    publishDateString: '12:46, сегодня',
                    ownerId: 44334,
                    ownerLogin: 'Sashok',
                    bulletinSubject: 'Web-программист',
                    bulletinText: 'Текст объявления ...',
                    bulletinImagees: [],
                },
            ])
        )

    return (
        <div className={styles.moderationTape}>
            {activeAdvertisement?.id}

            <List
                items={advertisements}
                activeItem={activeAdvertisement}
                onListItemClick={(item) => setActiveAdvertisement(item)}
                renderItem={(item: AdvertisementType) => (
                    <Advertisement advertisement={item} />
                )}
            />

            <ModerationTapeManual />
        </div>
    )
}

export default ModerationTape
