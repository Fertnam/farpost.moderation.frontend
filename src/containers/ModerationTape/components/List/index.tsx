import React from 'react'
import List from 'components/List'
import Advertisement from 'components/Advertisement'
import AdvertisementType from 'core/types/Advertisement'
import useList from 'core/hooks/useList'
import styles from './styles.module.scss'

function ModerationTapeList() {
    const [advertisements, activeAdvertisement, setActiveAdvertisement] =
        useList<AdvertisementType>((setItems) => {
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
        })

    return (
        <div className={styles.moderationTapeList}>
            <List
                items={advertisements}
                activeItem={activeAdvertisement}
                renderItem={(advertisement) => (
                    <Advertisement advertisement={advertisement} />
                )}
                onListItemClick={(advertisement) =>
                    setActiveAdvertisement(advertisement)
                }
            />
        </div>
    )
}

export default ModerationTapeList
