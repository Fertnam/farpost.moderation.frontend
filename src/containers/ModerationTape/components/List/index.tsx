import React, { useEffect, useState } from 'react'
import List from 'components/List'
import Advertisement from 'components/Advertisement'
import Spinner from 'components/Spinner'
import AdvertisementType from 'core/types/Advertisement'
import useList from 'core/hooks/useList'
import useAdvertisementsApi from 'core/api/useAdvertisementsApi'
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

    const { fetchAdvertisements } = useAdvertisementsApi()

    useEffect(() => {
        async function onKeyDown(event: KeyboardEvent) {
            if (!event.shiftKey && event.key === 'Enter') {
                try {
                    setTapeState(TapeStates.LOADING)

                    const fetchedAdvertisements = await fetchAdvertisements(1)

                    setTapeState(TapeStates.READY)
                    setAdvertisements(fetchedAdvertisements)
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

    useEffect(() => {
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
    }, [activeAdvertisement])

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
