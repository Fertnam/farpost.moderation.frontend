import React, { useEffect, useState } from 'react'
import ModerationTapeItem from './components/Item'
import ModerationTapeManual from './components/Manual'
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
            {
                id: 3242324,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 32423214,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 3242234,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 3242346,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 3284234,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 32423466,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 32423444,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 32421134,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 324544234,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 324342234,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 32423453454,
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
