import React, { useEffect, useState } from 'react'
import List from 'components/List'
import Advertisement from 'components/Advertisement'
import AdvertisementType from 'core/types/Advertisement'
import useList from 'core/hooks/useList'
import styles from './styles.module.scss'

function ModerationTapeList() {
    const [
        advertisements,
        setAdvertisements,
        activeAdvertisement,
        setActiveAdvertisement,
    ] = useList<AdvertisementType>()

    const [isDirty, setIsDirty] = useState<boolean>(true)

    useEffect(function fetchAdvertisements() {
        function onKeyDown(event: KeyboardEvent) {
            if (!event.shiftKey && event.key === 'Enter') {
                if (isDirty) {
                    setIsDirty(false)
                }

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
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    useEffect(
        function activeAdvertisementHandler() {
            function onKeyDown(event: KeyboardEvent) {
                if (event.key === 'F7') {
                    console.log('saved')
                }

                if (event.key === ' ') {
                    console.log(
                        `advertisement with id ${activeAdvertisement?.id} was approved`
                    )
                }

                if (event.key === 'Backspace') {
                    console.log(
                        `advertisement with id ${activeAdvertisement?.id} was rejected`
                    )
                }

                if (event.shiftKey && event.key === 'Enter') {
                    console.log(
                        `advertisement with id ${activeAdvertisement?.id} was escalated`
                    )
                }
            }

            document.addEventListener('keydown', onKeyDown)

            return () => {
                document.removeEventListener('keydown', onKeyDown)
            }
        },
        [activeAdvertisement]
    )

    return (
        <div className={styles.moderationTapeList}>
            {isDirty ? (
                <div>Нажмите enter для загрузки объявлений</div>
            ) : advertisements.length > 0 ? (
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
            ) : (
                <div>пусто</div>
            )}
        </div>
    )
}

export default ModerationTapeList
