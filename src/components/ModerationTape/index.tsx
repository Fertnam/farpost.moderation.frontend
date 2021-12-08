import React from 'react'
import Advertisement from '../Advertisement'
import styles from './styles.module.scss'
import { AdvertisementType } from '../../core/types/Advertisement'

const advertisements: AdvertisementType[] = [
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
]

function ModerationTape() {
    return (
        <div className={styles.moderationTape}>
            {advertisements.map((advertisement) => (
                <Advertisement advertisement={advertisement} />
            ))}
        </div>
    )
}

export default ModerationTape
