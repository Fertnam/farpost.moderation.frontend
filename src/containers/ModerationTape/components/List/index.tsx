import React, { useEffect, useState } from 'react'
import List from 'components/List'
import Advertisement from 'components/Advertisement'
import Spinner from 'components/Spinner'
import AdvertisementType from 'core/types/Advertisement'
import useList from 'core/hooks/useList'
import styles from './styles.module.scss'

enum TapeStates {
    EMPTY,
    LOADING,
    READY,
}

function ModerationTapeList() {
    const [
        advertisements,
        setAdvertisements,
        activeAdvertisement,
        setActiveAdvertisement,
    ] = useList<AdvertisementType>()

    const [tapeState, setTapeState] = useState<TapeStates>(TapeStates.EMPTY)

    useEffect(function fetchAdvertisements() {
        function onKeyDown(event: KeyboardEvent) {
            if (!event.shiftKey && event.key === 'Enter') {
                try {
                    setTapeState(TapeStates.LOADING)

                    setTimeout(() => {
                        setTapeState(TapeStates.READY)
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
                    }, 2000)
                } catch (e) {
                    console.error(e)
                }
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

    let tape = <div>В данный момент нет доступных для модерации объявлений</div>

    if (tapeState === TapeStates.EMPTY) {
        tape = (
            <div>
                Нажмите клавишу{' '}
                <span style={{ fontWeight: 'bold' }}>Enter</span> для загрузки
                объявлений
            </div>
        )
    } else if (tapeState === TapeStates.LOADING) {
        tape = <Spinner />
    } else if (advertisements.length > 0) {
        tape = (
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
        )
    }

    return <div className={styles.moderationTapeList}>{tape}</div>
}

export default ModerationTapeList
