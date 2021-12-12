import React, { useEffect, useState } from 'react'
import { AdvertisementType } from 'core/types/Advertisement'

type ReturnTuple = [
    AdvertisementType[],
    AdvertisementType | undefined,
    React.Dispatch<React.SetStateAction<AdvertisementType | undefined>>
]

function useModerationTape(): ReturnTuple {
    const [advertisements, setAdvertisements] = useState<AdvertisementType[]>(
        []
    )

    const [activeAdvertisement, setActiveAdvertisement] =
        useState<AdvertisementType>()

    useEffect(function fetchAdvertisements() {
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

    useEffect(
        function focusToFirstAdvertisement() {
            setActiveAdvertisement(advertisements[0])
        },
        [advertisements]
    )

    return [advertisements, activeAdvertisement, setActiveAdvertisement]
}

export default useModerationTape
