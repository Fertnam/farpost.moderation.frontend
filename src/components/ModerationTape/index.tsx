import React, { useEffect, useState } from 'react'
import Advertisement from '../Advertisement'
import styles from './styles.module.scss'
import { AdvertisementType } from '../../core/types/Advertisement'

function ModerationTape() {
    const [advertisements, setAdvertisements] = useState<AdvertisementType[]>(
        []
    )

    useEffect(function getAdvertisements() {
        setAdvertisements([
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
    }, [])

    const [activeAdvertisement, setActiveAdvertisement] =
        useState<AdvertisementType>()

    useEffect(
        function focus() {
            setActiveAdvertisement(advertisements[0])
        },
        [advertisements]
    )

    return (
        <div className={styles.moderationTape}>
            {advertisements.map((advertisement) => (
                <div
                    className={
                        activeAdvertisement?.id === advertisement.id
                            ? [styles.item, styles.active].join(' ')
                            : styles.item
                    }
                    key={advertisement.id}
                    onClick={() => setActiveAdvertisement(advertisement)}
                >
                    <Advertisement advertisement={advertisement} />
                </div>
            ))}
        </div>
    )
}

export default ModerationTape
