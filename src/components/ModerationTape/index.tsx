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

            <div className={styles.help}>
                <div className={[styles.item, styles.green].join(' ')}>
                    <span className={styles.action}>Одобрить</span>
                    <span className={styles.key}>Пробел</span>
                </div>

                <div className={[styles.item, styles.orange].join(' ')}>
                    <span className={styles.action}>Отклонить</span>
                    <span className={styles.key}>Del</span>
                </div>

                <div className={[styles.item, styles.blue].join(' ')}>
                    <span className={styles.action}>Эскалация</span>
                    <span className={styles.key}>Shift+Enter</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.action}>Сохранить</span>
                    <span className={styles.key}>F7</span>
                </div>
            </div>
        </div>
    )
}

export default ModerationTape
